import { connect } from 'react-redux';
import FetchCoordsState from '../components/FetchCoordsState';
import { ReducerState, isFetching, hasError, getErrorMessage } from '../store';

interface StateProps {
	isFetching: boolean;
	hasError: boolean;
	errorMessage: string | null;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	isFetching: isFetching(state),
	hasError: hasError(state),
	errorMessage: getErrorMessage(state),
});

export default connect<StateProps>(
	mapStateToProps
)(FetchCoordsState);
