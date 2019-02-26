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
			className="DatePicker-prev btn"
			type="button"
			onClick={onClickPrev}
		>
			&larr;
		</button>

		<button
			className="DatePicker-today btn btn-primary"
			type="button"
			onClick={onClickToday}
			disabled={isToday === true}
		>
			Today
		</button>

		<button
			className="DatePicker-next btn"
			type="button"
			onClick={onClickNext}
		>
			&rarr;
		</button>
	</div>
);

export default DatePicker;
