import * as React from 'react';
import AngleDisplay from '../containers/AngleDisplay';
import CoordControls from './CoordControls';
import DateControls from './DateControls';
import Times from '../containers/Times';
import SunChart from '../containers/SunChart';

const App: React.StatelessComponent = () => (
	<div className="App">
		<section className="mb-5">
			<AngleDisplay />
		</section>

		<div className="card card-body mb-5">
			<div className="row">
				<section className="col-sm">
					<h2>Location</h2>
					<CoordControls />
				</section>

				<section className="col-sm">
					<h2>Date</h2>
					<DateControls />
				</section>
			</div>
		</div>

		<section className="mb-5">
			<h2 className="mb-3">Times</h2>
			<Times />
		</section>

		<section className="mb-5">
			<h2 className="mb-3">Sun position</h2>
			<SunChart />
		</section>
	</div>
);

export default App;
