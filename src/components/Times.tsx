import * as React from 'react';

export interface Props {
	sunriseStart: Date;
	sunriseEnd: Date;
	sunsetStart: Date;
	sunsetEnd: Date;
	uvbStart: Date;
	uvbEnd: Date;
}

const Times: React.StatelessComponent<Props> = ({
	sunriseStart,
	sunsetEnd,
	uvbStart,
	uvbEnd,
}) => (
	<div className="Times">
		<dl>
			<dt>Sunrise</dt>
			<dd>{sunriseStart.toLocaleTimeString()}</dd>

			<dt>UVB penetration begins</dt>
			<dd>{uvbStart.toLocaleTimeString()}</dd>

			<dt>UVB penetration ends</dt>
			<dd>{uvbEnd.toLocaleTimeString()}</dd>

			<dt>Sunset</dt>
			<dd>{sunsetEnd.toLocaleTimeString()}</dd>
		</dl>
	</div>
);

export default Times;
