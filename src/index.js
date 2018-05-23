import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import myReducer from './training/reducers/index';
import { sortValue, status} from './training/actions/index';
import { Provider } from 'react-redux';
const store = createStore(myReducer);

console.log(store.dispatch(status()));

console.log("toggle status",store.getState());

store.dispatch(sortValue({
	by : 'id',
	value : -2
}))

console.log("sort value",store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
