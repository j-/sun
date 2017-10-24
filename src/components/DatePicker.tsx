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
			<div className="DatePicker pt-button-group pt-large">
				<button
					className="DatePicker-prev pt-button"
					type="button"
					onClick={onClickPrev}
				>
					<span className="pt-icon-standard pt-icon-arrow-left" />
				</button>

				<button
					className="DatePicker-today pt-button"
					type="button"
					onClick={onClickToday}
				>
					Today
				</button>

				<button
					className="DatePicker-next pt-button"
					type="button"
					onClick={onClickNext}
				>
					<span className="pt-icon-standard pt-icon-arrow-right pt-align-right" />
				</button>
			</div>
		);
	}
}
