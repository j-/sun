import { connect } from 'react-redux';
import SunChart from '../components/SunChart';
import { ReducerState } from '../store';

interface StateProps {

}

const mapStateToProps = (state: ReducerState): StateProps => ({

});

export default connect<StateProps>(
	mapStateToProps
)(SunChart);
