import * as React from 'react';

export interface Props {
	value?: Date | null;
}

export default class CurrentDate extends React.Component<Props> {
	render () {
		const { value } = this.props;
		if (!value) {
			return null;
		}

		return (
			<time dateTime={value.toISOString()}>
				{value.toDateString()}
			</time>
		);
	}
}
