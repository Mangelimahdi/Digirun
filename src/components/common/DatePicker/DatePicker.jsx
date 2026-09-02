import React from 'react'

import * as RMDP from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./date-picker.css";

const DatePicker = RMDP.default.default;

function CustomDatePicker({ ref, value, onChange, onClose }) {
  return <DatePicker
    ref={ref}
    onChange={onChange}
    format="YYYY/MM/DD"
    onClose={onClose}
    value={value}
    calendar={persian}
    locale={persian_fa}

  />;
}

export default CustomDatePicker