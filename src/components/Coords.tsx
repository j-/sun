import * as React from 'react';
import { formatLatitude, formatLongitude } from '../format-degrees';
import './Coords.css';

export interface Props {
	latitude: number;
	longitude: number;
	includeMinutes?: boolean;
	includeSeconds?: boolean;
}

const Coords: React.StatelessComponent<Props> = ({
	latitude,
	longitude,
	includeMinutes,
	includeSeconds,
}) => (
	<div className="Coords">
		<span className="Coords-latitude">
			{formatLatitude(latitude, includeMinutes, includeSeconds)}
		</span>
		<br />
		<span className="Coords-longitude">
			{formatLongitude(longitude, includeMinutes, includeSeconds)}
		</span>
	</div>
);

export default Coords;
