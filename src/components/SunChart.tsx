import * as React from 'react';

import {
	LineChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Line,
	ReferenceLine,
} from 'recharts';

export interface Props {

}

const data = [
	{ 'Local hour': 6, 'Altitude': -10.9, 'Azimuth': 105.4 },
	{ 'Local hour': 7, 'Altitude': 1.3, 'Azimuth': 96.1 },
	{ 'Local hour': 8, 'Altitude': 12.9, 'Azimuth': 87.1 },
	{ 'Local hour': 9, 'Altitude': 24.8, 'Azimuth': 77.5 },
	{ 'Local hour': 10, 'Altitude': 36.1, 'Azimuth': 66.3 },
	{ 'Local hour': 11, 'Altitude': 46.4, 'Azimuth': 51.8 },
	{ 'Local hour': 12, 'Altitude': 54.5, 'Azimuth': 31.9 },
	{ 'Local hour': 13, 'Altitude': 58.4, 'Azimuth': 5.7 },
	{ 'Local hour': 14, 'Altitude': 56.7, 'Azimuth': 337.8 },
	{ 'Local hour': 15, 'Altitude': 50.0, 'Azimuth': 315.2 },
	{ 'Local hour': 16, 'Altitude': 40.5, 'Azimuth': 298.9 },
	{ 'Local hour': 17, 'Altitude': 29.4, 'Azimuth': 286.5 },
	{ 'Local hour': 18, 'Altitude': 17.7, 'Azimuth': 276.4 },
	{ 'Local hour': 19, 'Altitude': 5.9, 'Azimuth': 267.3 },
	{ 'Local hour': 20, 'Altitude': -6.1, 'Azimuth': 258.2 },
];

export default class SunChart extends React.Component<Props> {
	render () {
		return (
			<div className="SunChart">
				<LineChart width={1000} height={300} data={data}>
					<XAxis dataKey="Local hour" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="Altitude" stroke="#8884d8" dot={false} />
					<ReferenceLine y={0} stroke="#aaa" label="Local horizon" />
					<ReferenceLine y={50} stroke="#ccc" label="UVB penetration angle" />
					<ReferenceLine x={11} stroke="#800" label="Current time" />
				</LineChart>
			</div>
		);
	}
}
