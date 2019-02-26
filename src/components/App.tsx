import * as React from 'react';
import CoordControls from './CoordControls';
import DateControls from './DateControls';
import SunChart from '../containers/SunChart';

const App: React.StatelessComponent = () => (
	<div className="App">
		<section className="mb-5">
			<h2>Coordinates</h2>
			<CoordControls />
		</section>

		<section className="mb-5">
			<h2>Chart</h2>
			<DateControls />
			<SunChart />
		</section>
	</div>
);

export default App;
