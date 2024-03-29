import React, { FC, ReactElement } from 'react'
import { Box, Typography, Stack } from "@mui/material";

import { TaskDateField } from './_taskDateField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskTitleField } from './_taskTitleField';
import { TaskSelectField } from "./_taskSelectField";
import { Priority } from "./enums/priority";
import { Status } from "./enums/status";

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">Create a task</Typography>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <TaskSelectField 
            label="Status" 
            name="status" 
            items={[
              {
                label: Status.todo.toUpperCase(),
                value: Status.todo
              },
              {
                label: Status.inProgress.toUpperCase(),
                value: Status.inProgress
              }
            ]}
          />
          <TaskSelectField 
            label="Priority"
            name="priority"
            items={[
              {
                label: Priority.low,
                value: Priority.low
              },
              {
                label: Priority.normal,
                value: Priority.normal
              },
              {
                label: Priority.high,
                value: Priority.high
              }
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  )
}