import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import rootReducer from './store';
import './index.css';

import { setCoords, setDateRange } from './store/actions';

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

const now = new Date();
const startDate = new Date(now);
startDate.setHours(6);
startDate.setMinutes(0);
startDate.setSeconds(0);
startDate.setMilliseconds(0);
const endDate = new Date(now);
endDate.setHours(20);
endDate.setMinutes(0);
endDate.setSeconds(0);
endDate.setMilliseconds(0);

// Use today as a default
store.dispatch(
	setDateRange(
		startDate,
		endDate,
	)
);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
