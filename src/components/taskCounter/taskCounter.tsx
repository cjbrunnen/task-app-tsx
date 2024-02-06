import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@mui/material";

import { Status } from "../createTaskForm/enums/status";
import { ITaskCounter } from "./interfaces/ITaskCounter";
import { emitCorrectBorderColour } from "./helpers/emitCorrectBorderColour";
import { emitCorrectLabel } from "./helpers/emitCorrectLabel";

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const {
    count = 0,
    status = Status.completed
  } = props
  return (
    <>
      <Box 
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColour(status)}`
          }}
        >
          <Typography
            color='#FFFF' variant='h4'
          >{count}</Typography>
        </Avatar>
        <Typography
          color='#FFFF'
          fontWeight='bold'
          fontSize='20px'
          variant='h5'
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  )
}

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed])
}