import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ISelectField } from "./interfaces/ISelectField";

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const { 
    label = 'Select Box', 
    value = '', 
    name = 'selectBox', 
    onChange = (e: SelectChangeEvent) => console.log(e), 
    items = [{ value: '', label: 'Add items'}],
    disabled = false
  } = props
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {
          items.map((item, i) => (
            <MenuItem key={`${item.value + i}`} value={item.value}>{item.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  )
}