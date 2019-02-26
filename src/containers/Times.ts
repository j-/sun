import { connect, MapStateToProps } from 'react-redux';
import Times from '../components/Times';

import {
	RootReducerState,
	getSunriseStartTime,
	getSunriseEndTime,
	getSunsetStartTime,
	getSunsetEndTime,
	getUVBStartTime,
	getUVBEndTime,
} from '../store';

interface StateProps {
	sunriseStart: Date | null;
	sunriseEnd: Date | null;
	sunsetStart: Date | null;
	sunsetEnd: Date | null;
	uvbStart: Date | null;
	uvbEnd: Date | null;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	sunriseStart: getSunriseStartTime(state),
	sunriseEnd: getSunriseEndTime(state),
	sunsetStart: getSunsetStartTime(state),
	sunsetEnd: getSunsetEndTime(state),
	uvbStart: getUVBStartTime(state),
	uvbEnd: getUVBEndTime(state),
});

export default connect(
	mapStateToProps,
)(Times);
