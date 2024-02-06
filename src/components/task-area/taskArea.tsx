import React, { FC, ReactElement } from 'react';
import { Box, Grid } from "@mui/material";
import { format } from "date-fns";

import { Status } from "../createTaskForm/enums/status";
import { TaskCounter } from "../taskCounter/taskCounter";
import { Task } from "../task/task";

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Your To Do list as of: {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid 
        container
        display='flex'
        justifyContent='center'
      >
        <Grid 
          item
          display='flex'
          flexDirection='row'
          justifyContent='space-around'
          alignItems='center'
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} count={1} />
          <TaskCounter status={Status.inProgress} count={6} />
          <TaskCounter status={Status.completed} count={10} />
        </Grid>
        <Grid 
          item
          display='flex'
          flexDirection='column'
          xs={12}
          md={8}
        >
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  )
}