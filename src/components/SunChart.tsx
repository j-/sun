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
	startDate: Date;
	endDate: Date;
	interval: number;
	getAltitude: (date: Date) => number;
}

export default class SunChart extends React.Component<Props> {
	render () {
		return (
			<div className="SunChart">
				<LineChart width={1000} height={300} data={this.buildData()}>
					<XAxis dataKey="Local hour" ticks={this.buildTicks()} />
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

	private buildData () {
		const { startDate, endDate, interval, getAltitude } = this.props;
		const data = [];
		let referenceDate = new Date(startDate);
		while (referenceDate <= endDate) {
			data.push({
				'Local hour': referenceDate.getHours() + referenceDate.getMinutes() / 60,
				'Altitude': getAltitude(referenceDate),
			});
			referenceDate.setTime(referenceDate.getTime() + interval);
		}
		return data;
	}

	/** Generates a tick every hour */
	private buildTicks () {
		const { startDate, endDate } = this.props;
		const ticks = [];
		let referenceDate = new Date(startDate);
		while (referenceDate <= endDate) {
			const hours = referenceDate.getHours();
			ticks.push(hours);
			referenceDate.setHours(hours + 1);
		}
		return ticks;
	}
}
