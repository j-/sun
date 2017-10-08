import * as React from 'react';
import './SunChart.css';

import {
	LineChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Line,
	ReferenceLine,
} from 'recharts';

export interface Props {
	hasDateRange: boolean;
	startDate: Date;
	endDate: Date;
	currentTime?: Date;
	interval: number;
	getAltitude: (date: Date) => number;
}

const LOCAL_HOUR_LABEL = 'Local hour';
const ALTITUDE_LABEL = 'Altitude';

const tickFormatter = (value: number): string => (
	(Math.floor(value % 12) || 12) + (value >= 12 ? 'pm' : 'am')
);

/** Format like clock time */
const labelFormatter = (value: number): string => {
	const hours = Math.floor(value % 12) || 12;
	let minutes: string | number = Math.floor((value % 1) * 60);
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	const ampm = value >= 12 ? 'pm' : 'am';
	return `${hours}:${minutes}${ampm}`;
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

		const { startDate, endDate, currentTime, interval } = this.props;
		let currentTimeReference;

		if (currentTime && currentTime >= startDate && currentTime <= endDate) {
			let x = currentTime.getHours();
			// Add minutes and round to the nearest interval
			x += (Math.round(currentTime.getMinutes() / (interval / 60000)) * (interval / 60000)) / 60;
			currentTimeReference = (
				<ReferenceLine x={x} stroke="#800" label="Current time" />
			);
		}

		return (
			<div className="SunChart">
				<div className="SunChart-inner">
					<LineChart width={1000} height={300} data={this.buildData()}>
						<XAxis dataKey={LOCAL_HOUR_LABEL} ticks={this.buildTicks()} tickFormatter={tickFormatter} />
						<YAxis width={30} />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip formatter={valueFormatter} labelFormatter={labelFormatter} />
						<Line type="monotone" dataKey={ALTITUDE_LABEL} stroke="#8884d8" dot={false} />
						<ReferenceLine y={0} stroke="#aaa" label="Local horizon" />
						<ReferenceLine y={50} stroke="#ccc" label="UVB penetration angle" />
						{currentTimeReference}
					</LineChart>
				</div>
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
