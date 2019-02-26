import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import rootReducer from './store';
import '@blueprintjs/core/dist/blueprint.css';
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

const now = new Date();

now.setMinutes(Math.round(now.getMinutes() * 15) / 15);
now.setSeconds(0);
now.setMilliseconds(0);

// Use now as a default
store.dispatch(
	setCurrentTime(now)
);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import * as Suncalc from 'suncalc';

const state = store.getState();
const times = Suncalc.getTimes(new Date(), state.coords.latitude, state.coords.longitude);

console.log('UVB Start', times['uvbStart']);
console.log('UVB End', times['uvbEnd']);

console.log('Current angle', Suncalc.getPosition(new Date(state.dateRange.currentTime as string), state.coords.latitude, state.coords.longitude).altitude * 180 / Math.PI);
