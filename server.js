const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('superagent');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('dotenv').config();

const mailchimpInstance = 'us14',
      listId            = process.env.MAILING_LIST_ID
      mailchimpApiKey   = process.env.MAILCHIMP_API_KEY

//routes
app.get('/api/memberList', (req, res) => {
  mailchimp.get(`/lists/${list_id}/members`)
  .then(function(results){
    res.send(results);
  })
  .catch(function(err){
    res.send(err);
  });
});

app.post('/signup', function (req, res) {
  request
    .post(`https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listId}/members/`)
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer(`any: ${mailchimpInstance}`).toString('base64'))
    .send({
      'email_address': req.body.email,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': req.body.firstName,
        'LNAME': req.body.lastName
      }
    })
    .end(function(err, response) {
      if (response.status < 300 || (response.status === 400 && response.body.title === 'Member exists.')) {
        res.send('Success! :D Signed up!');
      } else {
        res.send(`Sign up failed :'(`);
      }
    })
});

const port = process.env.PORT || 9001;
app.listen(port, console.log(`express app listening on port ${port}`));