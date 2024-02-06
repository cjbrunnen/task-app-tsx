import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { IDateField } from "./interfaces/IDateField";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const { 
    value = new Date(), 
    disabled = false, 
    onChange = (date) => console.log(date)
  } = props

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  value: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}
