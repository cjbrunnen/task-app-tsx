import React, { FC, ReactElement } from 'react';
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import { Priority } from "../createTaskForm/enums/priority";
// import { Status } from "../createTaskForm/enums/status";
import { renderPriorityBorderColour } from "./helpers/renderPriorityBorderColour";

import { ITask } from "./interfaces/ITask";

import { TaskHeader } from "../task/_taskHeader";
import { TaskDescription } from "../task/_taskDescription";
import { TaskFooter } from "../task/_taskFooter";

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'text',
    priority = Priority.normal,
    // status = Status.todo,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e)
  } = props
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
      width='100%'
      mb={4}
      p={2}
      sx={{
        backgroundColor: 'background.paper',
        border: '2px solid',
        borderColor: renderPriorityBorderColour(priority),
        borderRadius: '8px',
        width: '100%'
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} />
    </Box>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string
}
