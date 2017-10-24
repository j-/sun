import * as React from 'react';

export interface Props {
	onClickPrev: () => void;
	onClickNext: () => void;
	onClickToday: () => void;
}

export default class DatePicker extends React.Component<Props> {
	render () {
		const { onClickPrev, onClickNext, onClickToday } = this.props;
		return (
			<div className="DatePicker">
				<button
					className="DatePicker-prev"
					type="button"
					onClick={onClickPrev}
				>
					&larr; Prev
				</button>

				<button
					className="DatePicker-today"
					type="button"
					onClick={onClickToday}
				>
					Today
				</button>

				<button
					className="DatePicker-next"
					type="button"
					onClick={onClickNext}
				>
					Next &rarr;
				</button>
			</div>
		);
	}
}
