import * as React from 'react';
import CurrentDate from '../containers/CurrentDate';
import DatePicker from '../containers/DatePicker';
import './DateControls.css';

const DateControls: React.StatelessComponent = () => (
	<div className="DateControls">
		<div className="DateControls-current-date mb-3">
			<CurrentDate />
		</div>
		<div className="DateControls-date-picker">
			<DatePicker />
		</div>
	</div>
);

export default DateControls;
