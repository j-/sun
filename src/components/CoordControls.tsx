import * as React from 'react';
import Coords from '../containers/Coords';
import FetchCoords from './FetchCoords';
import './CoordControls.css';

const CoordControls: React.StatelessComponent = () => (
	<div className="CoordControls">
		<div className="CoordControls-coords">
			<Coords />
		</div>
		<div className="CoordControls-fetch">
			<FetchCoords />
		</div>
	</div>
);

export default CoordControls;
