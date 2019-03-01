import * as React from 'react';
import FetchCoordsFetchingState from './FetchCoordsFetchingState';
import FetchCoordsErrorState from './FetchCoordsErrorState';

export interface Props {
	isFetching: boolean;
	hasError: boolean;
	errorMessage: string | null;
}

const FetchCoordsState: React.StatelessComponent<Props> = ({
	isFetching,
	hasError,
	errorMessage
}) => (
	<div className="FetchCoordsState">
		{isFetching && <FetchCoordsFetchingState />}
		{hasError && <FetchCoordsErrorState errorMessage={errorMessage!} />}
	</div>
);

export default FetchCoordsState;
