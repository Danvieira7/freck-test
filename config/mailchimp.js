import request from 'request';

export async function subscribe({ email }) {
  const data = {
    email_address: email,
    status: 'subscribed',
  };

  await new Promise((resolve, reject) => {
    request.post(
      {
        //switch out test list id when ready to deploy
        uri: `https://us14.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}/members/`,
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(`apikey:${process.env.MAILCHIMP_KEY}`).toString('base64')}`,
        },
        json: true,
        body: data,
      },
      (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      },
    );
  });
}