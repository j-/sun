import * as React from 'react';
import Coords from '../containers/Coords';
import FetchCoordsButton from '../containers/FetchCoordsButton';
import FetchCoordsState from '../containers/FetchCoordsState';
import SunChart from '../containers/SunChart';

const App = () => (
	<div className="App">
		<h1>Sun</h1>

		<section>
			<h2>Coordinates</h2>
			<Coords />
			<FetchCoordsButton />
			<FetchCoordsState />
		</section>

		<section>
			<h2>Chart</h2>
			<SunChart />
		</section>
	</div>
);

export default App;
