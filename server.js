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

// const dataCenter = process.env.DATA_CENTER,
//       listId            = process.env.MAILING_LIST_ID
//       mailchimpApiKey   = process.env.MAILCHIMP_API_KEY

// //routes
// app.post('/signup', function (req, res) {
	//   request
	//     .post(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/`)
	//     .set('Content-Type', 'application/json;charset=utf-8')
	//     .set('Authorization', 'Basic ' + Buffer.from(`any: ${dataCenter}`).toString('base64'))
	//     .send({
		//       'email_address': req.body.email,
		//       'status': 'subscribed',
		//       'merge_fields': {
			//         'FNAME': req.body.firstname,
//         'LNAME': req.body.lastname
//       }
//     })
//     .end(function(err, response) {
//       if (response.status < 300 || (response.status === 400 && response.body.title === 'Member exists.')) {
//         res.send('Success! :D Signed up!');
//       } else {
//         res.send(`Sign up failed :'(`);
//       }
//     })
// })

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