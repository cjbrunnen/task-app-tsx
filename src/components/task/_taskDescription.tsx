import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import { ITaskDescription } from "./interfaces/ITaskDescription";

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { 
    description = 'Description here'
  } = props
  return (
    <Box
      width='100%'
    >
      <Typography variant='body1'>{description}</Typography>
    </Box>
  )
}

TaskDescription.propTypes = {
  description: PropTypes.string
}
