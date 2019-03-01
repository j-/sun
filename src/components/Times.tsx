import * as React from 'react';

export interface Props {
	sunriseStart: Date | null;
	sunriseEnd: Date | null;
	solarNoon: Date | null;
	sunsetStart: Date | null;
	sunsetEnd: Date | null;
	uvbStart: Date | null;
	uvbEnd: Date | null;
}

const Times: React.StatelessComponent<Props> = ({
	sunriseStart,
	solarNoon,
	sunsetEnd,
	uvbStart,
	uvbEnd,
}) => (
	<div className="Times">
		<div className="row">
			<dl className="col-md text-center">
				<dt>Sunrise</dt>
				<dd>{sunriseStart ? sunriseStart.toLocaleTimeString() : <em>N/A</em>}</dd>
			</dl>
			<dl className="col-md text-center">
				<dt>UVB penetration begins</dt>
				<dd>{uvbStart ? uvbStart.toLocaleTimeString() : <em>N/A</em>}</dd>
			</dl>
			<dl className="col-md text-center">
				<dt>Solar noon</dt>
				<dd>{solarNoon ? solarNoon.toLocaleTimeString() : <em>N/A</em>}</dd>
			</dl>
			<dl className="col-md text-center">
				<dt>UVB penetration ends</dt>
				<dd>{uvbEnd ? uvbEnd.toLocaleTimeString() : <em>N/A</em>}</dd>
			</dl>
			<dl className="col-md text-center">
				<dt>Sunset</dt>
				<dd>{sunsetEnd ? sunsetEnd.toLocaleTimeString() : <em>N/A</em>}</dd>
			</dl>
		</div>
	</div>
);

export default Times;
