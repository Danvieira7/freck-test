const express = require('express');
const next = require('next');
const app = express();
const port = 300;
const dev = process.env.NODE_ENV !== 'production';
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('dotenv').config();

const wooApi = require('./utilities/wooApi');
const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
	url: wooApi.baseUrl,
	consumerKey: wooApi.consumerKey,
	consumerSecret: wooApi.consumerSecret,
	wpAPI: true,
	version: 'wc/v3',
	queryStringAuth: true
});

app
  .prepare()
	.then(() => {
		const server = express();	

		server.get('/get-products', (req, response) => {
			WooCommerce.get('products', function(err, data, res) {
				response.json(JSON.parse(res));
			});
		});

		server.get('/product/:slug', (req, res) => {
			app.render(req, res, '/product', { slug: req.params.slug });
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, err => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});