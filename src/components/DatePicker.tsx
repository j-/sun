import * as React from 'react';

export interface Props {
	onClickPrev: () => void;
	onClickNext: () => void;
	onClickToday: () => void;
	isToday: boolean | null;
}

const DatePicker: React.StatelessComponent<Props> = ({
	onClickPrev,
	onClickNext,
	onClickToday,
	isToday,
}) => (
	<div className="DatePicker pt-button-group pt-large">
		<button
			className="DatePicker-prev pt-button"
			type="button"
			onClick={onClickPrev}
		>
			<span className="pt-icon-standard pt-icon-arrow-left" />
		</button>

		<button
			className="DatePicker-today pt-button pt-intent-primary"
			type="button"
			onClick={onClickToday}
			disabled={isToday === true}
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

export default DatePicker;
