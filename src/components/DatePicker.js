import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import PropTypes from "prop-types";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = ({ from, to, setDate }) => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <DateRangePicker
      startDatePlaceholderText={"Start date"}
      endDatePlaceholderText={"End date"}
      startDate={from} // momentPropTypes.momentObj or null,
      fromId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={to} // momentPropTypes.momentObj or null,
      toId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => setDate(startDate, endDate)} // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      hideKeyboardShortcutsPanel={true}
      isOutsideRange={() => false}
      small={true}
    />
  );
};

DatePicker.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  setDate: PropTypes.func
};

export default DatePicker;
