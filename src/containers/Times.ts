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
	sunriseStart: Date;
	sunriseEnd: Date;
	sunsetStart: Date;
	sunsetEnd: Date;
	uvbStart: Date;
	uvbEnd: Date;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	sunriseStart: getSunriseStartTime(state)!,
	sunriseEnd: getSunriseEndTime(state)!,
	sunsetStart: getSunsetStartTime(state)!,
	sunsetEnd: getSunsetEndTime(state)!,
	uvbStart: getUVBStartTime(state)!,
	uvbEnd: getUVBEndTime(state)!,
});

export default connect(
	mapStateToProps,
)(Times);
