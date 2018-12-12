import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Stripe Provider
import {StripeProvider} from 'react-stripe-elements';

ReactDOM.render(
    <StripeProvider apiKey ="<YOUR_API_KEY>"> 
        <App />
    </StripeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
