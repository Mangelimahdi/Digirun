import React from 'react'

import * as RMDP from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./date-picker.css";
import DateObject from 'react-date-object';

const DatePicker = RMDP.default.default;

const today = new DateObject({
  calendar: persian,
  locale: persian_fa
})

function CustomDatePicker({ ref, value, onChange, onClose }) {
  return <DatePicker
    ref={ref}
    onChange={onChange}
    format="YYYY/MM/DD"
    onClose={onClose}
    value={value}
    calendar={persian}
    maxDate={today}
    locale={persian_fa}

  />;
}

export default CustomDatePicker