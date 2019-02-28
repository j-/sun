import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import rootReducer from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { setCoords, gotoToday, setCurrentTime } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
));

// Use Melbourne as a default
store.dispatch(
	setCoords({
		latitude: -37.813628,
		longitude: 144.963058,
	})
);

store.dispatch(
	gotoToday()
);

const ROUND_TO_MINUTES = 5;

const updateTime = () => {
	const now = new Date();
	now.setMinutes(Math.round(now.getMinutes() * ROUND_TO_MINUTES) / ROUND_TO_MINUTES);
	now.setSeconds(0);
	now.setMilliseconds(0);
	store.dispatch(
		setCurrentTime(now)
	);
};

updateTime(); // Set current time immediately
setInterval(updateTime, 1000 * 60); // Update every minue

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
