import * as React from 'react';

export interface Props {
	sunriseStart: Date | null;
	sunriseEnd: Date | null;
	sunsetStart: Date | null;
	sunsetEnd: Date | null;
	uvbStart: Date | null;
	uvbEnd: Date | null;
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
			<dd>{sunriseStart ? sunriseStart.toLocaleTimeString() : <em>N/A</em>}</dd>

			<dt>UVB penetration begins</dt>
			<dd>{uvbStart ? uvbStart.toLocaleTimeString() : <em>N/A</em>}</dd>

			<dt>UVB penetration ends</dt>
			<dd>{uvbEnd ? uvbEnd.toLocaleTimeString() : <em>N/A</em>}</dd>

			<dt>Sunset</dt>
			<dd>{sunsetEnd ? sunsetEnd.toLocaleTimeString() : <em>N/A</em>}</dd>
		</dl>
	</div>
);

export default Times;
