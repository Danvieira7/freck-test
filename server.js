import express from 'express';
import next from 'next';

import { subscribe } from './config/mailchimp';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

require('dotenv').config();

const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
	url: process.env.BASE_URL,
	headers: {
		Authorization: 'Basic Y2tfMWE0ODFkYTMzNTkxMWZkY2E3MWMzMjM4YTQ4NjJhZGZiZjgyNDE2YTpjc183M2QwMjhmMzAwZDIzMmU5YjQzMzhmOTc3YmM5ZmU3YmFmNjNjMzkx'
		},
	consumerKey: process.env.KEY,
	consumerSecret: process.env.SECRET,
	wpAPI: true,
	version: 'wc/v3',
	queryStringAuth: true
});

app
  .prepare()
	.then(() => {
		const server = express();

		server.use(express.json());

		server.get('/post/:slug', (req, res) => {
			const queryParams = { slug: req.params.slug, apiRoute: 'post' };
			app.render(req, res, '/post', queryParams);
		});

		server.get('/api/products', (req, response) => {
			WooCommerce.getAsync('products', function(err, data, res) {
				response.json(JSON.parse(res));
			});
		});

		server.get('/product/:slug', (req, res) => {
			app.render(req, res, '/product', { slug: req.params.slug });
		});

		server.post('/api/v1/public/subscribe', async (req, res) => {
			const { email } = req.body;
			if (!email) {
				res.json({ error: 'Email is required' });
				return;
			}

			try {
				await subscribe({ email });
				res.json({ subscribed: 1 });
				console.log(email);
			} catch(err) {
				res.json({ error: err.message || err.toString() });
			}
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