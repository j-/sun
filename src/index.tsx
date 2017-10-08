import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import rootReducer from './store';
import './index.css';

import { setCoords } from './store/actions';

const store = createStore(rootReducer, devToolsEnhancer({}));

// Use Melbourne as a default
store.dispatch(
	setCoords({
		latitude: -37.813628,
		longitude: 144.963058,
	})
);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
