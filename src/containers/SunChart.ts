import { connect } from 'react-redux';
import * as suncalc from 'suncalc';
import SunChart from '../components/SunChart';

import {
	RootReducerState,
	getLatitude,
	getLongitude,
	getStartDate,
	getEndDate,
	hasDateRange,
	getCurrentTime,
} from '../store';

interface StateProps {
	hasDateRange: boolean;
	startDate: Date;
	endDate: Date;
	currentTime?: Date;
	interval: number;
	getAltitude: (date: Date) => number;
}

const mapStateToProps = (state: RootReducerState): StateProps => ({
	hasDateRange: hasDateRange(state),
	startDate: getStartDate(state) as Date,
	endDate: getEndDate(state) as Date,
	currentTime: getCurrentTime(state) as Date,
	interval: 1000 * 60 * 15, // 15 mins
	getAltitude: (date: Date) => (
		suncalc.getPosition(
			date,
			getLatitude(state),
			getLongitude(state),
		).altitude * 180 / Math.PI
	),
});

export default connect<StateProps>(
	mapStateToProps
)(SunChart);
