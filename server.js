import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://freckbeauty.com';

const app = next({ dev });
const handle = app.getRequestHandler();

require('dotenv').config();

const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
	url: process.env.BASE_URL,
	consumerKey: process.env.KEY,
	consumerSecret: process.env.SECRET,
	wpAPI: true,
	version: 'wc/v1',
	queryStringAuth: true
});

app
  .prepare()
	.then(() => {
		const server = express();

		server.use(express.json());

		server.get('/api/products', (req, response) => {
			WooCommerce.getAsync('products', function(err, data, res) {
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