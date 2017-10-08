import * as React from 'react';
import './Coords.css';

export interface Props {
	latitude: number;
	longitude: number;
	includeMinutes?: boolean;
	includeSeconds?: boolean;
}

const formatDegrees = (
	degrees: number,
	includeMinutes: boolean = true,
	includeSeconds: boolean = false,
): string => {
	if (!includeMinutes) {
		return `${Math.round(degrees)}\xb0`;
	} else if (!includeSeconds) {
		const minutes = (degrees % 1) * 60;
		return `${Math.floor(degrees)}\xb0 ${Math.round(minutes)}'`;
	} else {
		const minutes = (degrees % 1) * 60;
		const seconds = ((degrees * 60) % 1) * 60;
		return `${Math.floor(degrees)}\xb0 ${Math.floor(minutes)}' ${Math.round(seconds)}"`;
	}
};

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
