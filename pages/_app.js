import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

// Change 'foo' case with 'counter cases

const reducer = (state = {foo: ''}, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload};
    default:
      return state
  }
}

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
}

// To continue Redux installation, follow this guide: https://github.com/kirill-konshin/next-redux-wrapper#how-it-works

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;