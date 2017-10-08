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
	hasDateRange: boolean;
	startDate: Date;
	endDate: Date;
	interval: number;
	getAltitude: (date: Date) => number;
}

const LOCAL_HOUR_LABEL = 'Local hour';
const ALTITUDE_LABEL = 'Altitude';

/** Format like clock time */
const labelFormatter = (value: number): string => {
	const hours = Math.floor(value % 12) || 12;
	let minutes: string | number = Math.floor((value % 1) * 60);
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	const ampm = value >= 12 ? 'PM' : 'AM';
	return `${hours}:${minutes} ${ampm}`;
};

/** Round to 1 decimal place and add degrees symbol */
const valueFormatter = (value: number): string => {
	return Math.round(value * 10) / 10 + '\xb0';
};

export default class SunChart extends React.Component<Props> {
	render () {
		if (!this.props.hasDateRange) {
			return null;
		}

		return (
			<div className="SunChart">
				<LineChart width={1000} height={300} data={this.buildData()}>
					<XAxis dataKey={LOCAL_HOUR_LABEL} ticks={this.buildTicks()} />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip formatter={valueFormatter} labelFormatter={labelFormatter} />
					<Legend />
					<Line type="monotone" dataKey={ALTITUDE_LABEL} stroke="#8884d8" dot={false} />
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
				[LOCAL_HOUR_LABEL]: referenceDate.getHours() + referenceDate.getMinutes() / 60,
				[ALTITUDE_LABEL]: getAltitude(referenceDate),
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
