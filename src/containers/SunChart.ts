import { connect } from 'react-redux';
import SunChart from '../components/SunChart';
import { ReducerState, getLatitude, getLongitude } from '../store';
import { getSunAltitude } from '../sun-altitude';

interface StateProps {
	startDate: Date;
	endDate: Date;
	interval: number;
	getAltitude: (date: Date) => number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	startDate: new Date(2017, 9, 7, 6, 0, 0, 0),
	endDate: new Date(2017, 9, 7, 20, 0, 0, 0),
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
