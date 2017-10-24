import * as React from 'react';
import Ribbon from './Ribbon';
import CoordControls from './CoordControls';
import DateControls from './DateControls';
import SunChart from '../containers/SunChart';
import './App.css';

const App = () => (
	<div className="App">
		<Ribbon />

		<h1>Sun</h1>

		<section>
			<h2>Coordinates</h2>
			<CoordControls />
		</section>

		<section>
			<h2>Chart</h2>
			<DateControls />
			<SunChart />
		</section>
	</div>
);

export default App;
