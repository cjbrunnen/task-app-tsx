import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

import { ITextField } from "./interfaces/ITextField";

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  // I have decided to see what happens if I don't add defalts to destructured props
  const { onChange, disabled } = props
  return (
    <TextField 
      id="description"
      label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      name="title"
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  )
}

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}
