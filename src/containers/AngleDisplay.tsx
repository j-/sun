import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState, getCurrentAngle } from '../store';

interface StateProps {
	angleRads: number | null;
}

const AngleDisplay: React.FunctionComponent<StateProps> = ({ angleRads }) => (
	<h1 className="display-1">
		{angleRads ? Math.round(angleRads * 180 / Math.PI) + '\xb0' : <em>N/A</em>}
	</h1>
);

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	angleRads: getCurrentAngle(state),
});

export default connect(
	mapStateToProps,
)(AngleDisplay);
