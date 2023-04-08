import React from 'react'
import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemButton, Typography,ListItemText, AvatarGroup } from '@mui/material'
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Rightbar = () => {
  return (
    <Box flex={2} sx={{width :'100%', display : {xs : "none" ,lg : "block"}}}>
      <Box position='fixed' >
        <Box sx={{m:'30px',display :'flex', justifyContent :'space-between',width :'300px'}}>

          <Typography variant='h5'>Contacts</Typography>

          <Box>
            <IconButton>
              <PhotoCameraFrontIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>

        <List>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{bgcolor :'orange'}}>
                  MLK
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Martin Luther King"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{bgcolor :'blue'}}>
                  A
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Alexander"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{bgcolor :'#EE2E31'}}>
                  L
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Liam"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{bgcolor :'#1D7874'}}>
                  D
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Damian"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{bgcolor :'#4FC095'}}>
                  H
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Hannah"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <AvatarGroup max={4}>
                  <Avatar sx={{bgcolor :'#AC5E31'}} >
                    K
                  </Avatar>
                  <Avatar sx={{bgcolor :'#264653'}}>
                    F
                  </Avatar>
                  <Avatar sx={{bgcolor :'#2A9D8F'}} >
                    L
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AE6B31'}} >
                    W
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AC5E31'}}>
                    D
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AC5E31'}}>
                    D
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AC5E31'}}>
                    D
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AC5E31'}}>
                    D
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AC5E31'}}>
                    D
                  </Avatar>
                  <Avatar sx={{bgcolor :'#AC5E31'}}>
                    D
                  </Avatar>
                </AvatarGroup>
              </ListItemAvatar>
            </ListItemButton>
          </ListItem>
        </List>
       
      </Box>
    </Box >
  )
}

export default Rightbar