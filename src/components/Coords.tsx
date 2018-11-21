import * as React from 'react';
import { formatDegrees } from '../format-degrees';
import './Coords.css';

export interface Props {
	latitude: number;
	longitude: number;
	includeMinutes?: boolean;
	includeSeconds?: boolean;
}

export default class Coords extends React.Component<Props> {
	render () {
		const {
			latitude,
			longitude,
			includeMinutes,
			includeSeconds,
		} = this.props;
		const formattedLatitude = (
			formatDegrees(Math.abs(latitude), includeMinutes, includeSeconds)) +
			' ' + (latitude >= 0 ? 'N' : 'S'
		);
		const formattedLongitude = (
			formatDegrees(Math.abs(longitude), includeMinutes, includeSeconds)) +
			' ' + (longitude >= 0 ? 'E' : 'W'
		);
		return (
			<div className="Coords">
				<span className="Coords-latitude">
					{formattedLatitude}
				</span>
				<br />
				<span className="Coords-longitude">
					{formattedLongitude}
				</span>
			</div>
		);
	}
}
