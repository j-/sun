import * as React from 'react';
import Coords from '../containers/Coords';
import FetchCoordsButton from '../containers/FetchCoordsButton';
import FetchCoordsState from '../containers/FetchCoordsState';

const App = () => (
	<div className="App">
		<h1>Sun</h1>

		<h2>Coordinates</h2>
		<Coords />
		<FetchCoordsButton />
		<FetchCoordsState />
	</div>
);

export default App;
