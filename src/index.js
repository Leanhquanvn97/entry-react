import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import reducers from './redux/reducers'
import App from './App';

const store = createStore(reducers,
    compose(applyMiddleware(thunk)));

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    connectToDevTools: true
})


ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                < App />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
