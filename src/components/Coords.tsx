import * as React from 'react';
import { formatLatitude, formatLongitude } from '../format-degrees';

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
	<div className="Coords list-group list-group-horizontal mb-3">
		<li className="Coords-latitude list-group-item">
			{formatLatitude(latitude, includeMinutes, includeSeconds)}
		</li>
		<li className="Coords-longitude list-group-item">
			{formatLongitude(longitude, includeMinutes, includeSeconds)}
		</li>
	</div>
);

export default Coords;
