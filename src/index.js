import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import rootReducer from  './app/root-reducer';
import Root from  './app/root';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);
