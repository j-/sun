import * as React from 'react';

export interface Props {
	value?: Date | null;
}

const CurrentDate: React.StatelessComponent<Props> = ({ value }) => (
	value ? (
		<time dateTime={value.toISOString()}>
			{value.toDateString()}
		</time>
	) : null
);

export default CurrentDate;
