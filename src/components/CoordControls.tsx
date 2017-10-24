import * as React from 'react';
import Coords from '../containers/Coords';
import FetchCoords from './FetchCoords';
import './CoordControls.css';

export default class CoordControls extends React.Component {
	render () {
		return (
			<div className="CoordControls">
				<div className="CoordControls-coords">
					<Coords />
				</div>
				<div className="CoordControls-fetch">
					<FetchCoords />
				</div>
			</div>
		);
	}
}
