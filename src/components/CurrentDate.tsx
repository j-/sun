import * as React from 'react';

export interface Props {
	value?: Date | null;
}

const CurrentDate: React.StatelessComponent<Props> = ({ value }) => (
	value ? (
		<div className="CurrentDate list-group list-group-horizontal">
			<time className="list-group-item flex-grow-1 rounded" dateTime={value.toISOString()}>
				{value.toDateString()}
			</time>
		</div>
	) : null
);

export default CurrentDate;
