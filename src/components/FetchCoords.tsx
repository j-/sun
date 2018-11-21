import * as React from 'react';
import FetchCoordsButton from '../containers/FetchCoordsButton';
import FetchCoordsState from '../containers/FetchCoordsState';
import './FetchCoords.css';

const FetchCoords: React.StatelessComponent = () => (
	<div className="FetchCoords">
		<div className="FetchCoords-button">
			<FetchCoordsButton />
		</div>
		<div className="FetchCoords-state">
			<FetchCoordsState />
		</div>
	</div>
);

export default FetchCoords;
