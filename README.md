# Freck-Next

Freck-Next is Freck's new front-end built with Next.js, a React framework. Launch date: September 10, 2019.

## Motivation

Decoupling Freck's front-end from its CMS (WordPress) is paramount to providing a better mobile user experience. 75% of Freck's customers are mobile users, but our current front-end design was made for deskstop viewing. We wanted to give our audience a progressive web app when shopping for our beauty products, and that couldn't be accomplished with our previous tech stack. Integrating Next.js was a natural choice for faster performance and smoother navigation.

## Technologies Used
[Next.js](https://nextjs.org/)    
[Node.js](https://nodejs.org/en/)  
[Express](https://expressjs.com/)

## API Reference
[Mailchimp API](https://developer.mailchimp.com/)  
[WordPress REST API](https://developer.wordpress.org/rest-api/)  
[WooCommerce REST API](https://woocommerce.github.io/woocommerce-rest-api-docs/)

## Installation

In Terminal, type:

```
npm i
touch .env
```

Using environment variables found in Team Freck 1Password, add environment variables to .env file.
Save modifications.
To run app locally, in Terminal, type:

```
node start.js
```