import { connect } from 'react-redux';
import FetchCoordsState from '../components/FetchCoordsState';

import {
	RootReducerState,
	isLocated,
	isFetching,
	hasError,
	getErrorMessage,
} from '../store';

interface StateProps {
	isLocated: boolean;
	isFetching: boolean;
	hasError: boolean;
	errorMessage: string | null;
}

const mapStateToProps = (state: RootReducerState): StateProps => ({
	isLocated: isLocated(state),
	isFetching: isFetching(state),
	hasError: hasError(state),
	errorMessage: getErrorMessage(state),
});

export default connect<StateProps>(
	mapStateToProps
)(FetchCoordsState);
