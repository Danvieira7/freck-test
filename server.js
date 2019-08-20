import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

require('dotenv').config();

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