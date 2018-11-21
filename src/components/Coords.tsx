import * as React from 'react';
import { formatLatitude, formatLongitude } from '../format-degrees';
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
		const formattedLatitude = formatLatitude(latitude, includeMinutes, includeSeconds);
		const formattedLongitude = formatLongitude(longitude, includeMinutes, includeSeconds);
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
