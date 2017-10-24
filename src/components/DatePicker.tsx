import * as React from 'react';

export interface Props {
	highlightPrev?: boolean;
	onClickPrev: () => void;
	highlightNext?: boolean;
	onClickNext: () => void;
	highlightToday?: boolean;
	onClickToday: () => void;
}

export default class DatePicker extends React.Component<Props> {
	render () {
		const {
			onClickPrev,
			highlightPrev,
			onClickNext,
			highlightNext,
			onClickToday,
			highlightToday,
		} = this.props;

		return (
			<div className="DatePicker pt-button-group pt-large">
				<button
					className={'DatePicker-prev pt-button ' + (highlightPrev ? 'pt-intent-primary' : '')}
					type="button"
					onClick={onClickPrev}
				>
					<span className="pt-icon-standard pt-icon-arrow-left" />
				</button>

				<button
					className={'DatePicker-today pt-button ' + (highlightToday ? 'pt-intent-primary' : '')}
					type="button"
					onClick={onClickToday}
				>
					Today
				</button>

				<button
					className={'DatePicker-next pt-button ' + (highlightNext ? 'pt-intent-primary' : '')}
					type="button"
					onClick={onClickNext}
				>
					<span className="pt-icon-standard pt-icon-arrow-right pt-align-right" />
				</button>
			</div>
		);
	}
}
