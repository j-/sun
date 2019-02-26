import * as React from 'react';

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
		{!isFetching && !hasError && <span>&zwj;</span>}
		{isFetching && <em>Locating&hellip;</em>}
		{hasError && <strong>Error: {errorMessage}</strong>}
	</div>
);

export default FetchCoordsState;
