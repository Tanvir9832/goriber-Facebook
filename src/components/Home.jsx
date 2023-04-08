import { Box, Stack } from '@mui/material'
import React from 'react'
import Feed from './Home/feed'
import Rightbar from './Home/Rightbar'
import Sidebar from './Home/sidebar'
import Add from './post/Add'

const Home = ({setMode , mode}) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"} sx={{overflow : "scroll"}}>
   <Stack direction='row' spacing={2} justifyContent="space-between" boxSizing='border-box'>
    <Sidebar setMode={setMode} mode={mode}  />
    <Feed />
    <Rightbar />
   </Stack>
   <Add />
    </Box>
  )
}

export default Home