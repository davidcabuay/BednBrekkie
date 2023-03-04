import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { useState } from 'react';
import "react-dates/lib/css/_datepicker.css";
import './calendar.css'


export default function Calendar(props){
    const [focusedInput, setFocusedInput] = useState();

    return(
        <>
            <DateRangePicker
                startDate= {props.checkIn} // momentPropTypes.momentObj or null,
                startDateId="start_date_id" // PropTypes.string.isRequired,
                endDate={props.checkOut} // momentPropTypes.momentObj or null,
                endDateId="end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => {props.setCheckIn(startDate); props.setCheckOut(endDate)}} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,

                startDatePlaceholderText= 'CHECK-IN'
                endDatePlaceholderText='CHECKOUT'
                small={true}
            />
        </>
    )
}