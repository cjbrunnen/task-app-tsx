import React, { FC, ReactElement } from 'react'
import PropTypes from "prop-types";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";

import { ITaskFooter } from "./interfaces/ITaskFooter";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const { 
    onStatusChange = (e) => console.log(e), 
    onClick = (e) => console.log(e)
  } = props
  return (
    <Box
      alignItems='center'
      display='flex'
      justifyContent='space-between'
      mt={4}
    >
      <FormControlLabel 
        control={
          <Switch 
            onChange={(e) => onStatusChange(e)}
            // defaultChecked 
            color='warning'
          />
        } 
        label='label' 
      />
      <Button 
        onClick={(e) => onClick(e)}
        variant='contained' 
        color="success" 
        size='small'
        sx={{
          color: '#ffffff'
        }}
      >Mark complete</Button>
    </Box>
  )
}

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
}
