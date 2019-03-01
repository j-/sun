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
			<p>
				{!isFetching && !hasError && <span>&zwj;</span>}
				{isFetching && <em>Locating&hellip;</em>}
				{hasError && <span>Error: {errorMessage}</span>}
			</p>
		</div>
	)
);

export default FetchCoordsState;
