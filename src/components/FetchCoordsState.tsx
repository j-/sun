import * as React from 'react';

export interface Props {
	isLocated: boolean;
	isFetching: boolean;
	hasError: boolean;
	errorMessage: string | null;
}

const FetchCoordsState: React.StatelessComponent<Props> = ({
	isLocated,
	isFetching,
	hasError,
	errorMessage
}) => (
	isLocated ? null : (
		<div className="FetchCoordsState">
			{!isFetching && !hasError && <span>&zwj;</span>}
			{isFetching && <em>Locating&hellip;</em>}
			{hasError && <strong>Error: {errorMessage}</strong>}
		</div>
	)
);

export default FetchCoordsState;
