import { connect } from 'react-redux';
import SunChart from '../components/SunChart';
import { ReducerState, getLatitude, getLongitude, getStartDate, getEndDate, hasDateRange } from '../store';
import { getSunAltitude } from '../sun-altitude';

interface StateProps {
	hasDateRange: boolean;
	startDate: Date;
	endDate: Date;
	interval: number;
	getAltitude: (date: Date) => number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	hasDateRange: hasDateRange(state),
	startDate: getStartDate(state) as Date,
	endDate: getEndDate(state) as Date,
	interval: 1000 * 60 * 15, // 15 mins
	getAltitude: (date: Date) => (
		getSunAltitude(
			date,
			getLatitude(state),
			getLongitude(state),
		)
	),
});

export default connect<StateProps>(
	mapStateToProps
)(SunChart);
