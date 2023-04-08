import { Avatar, Box,Divider,List,ListItem,ListItemAvatar,ListItemButton,ListItemIcon,ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PagesIcon from '@mui/icons-material/Pages';
import GroupsIcon from '@mui/icons-material/Groups';
import React from 'react'

import img from './img/img.jpg';


import { ModeNight } from '@mui/icons-material';

const Sidebar = ({setMode , mode}) => {
  return (
    <Box flex={1} sx={{ display : {xs : "none" ,md : "block"} }} >
      <Box position='fixed'>
      <List>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <ListItemIcon>
                <HomeIcon sx={{width : '40px' ,height :'40px'}} color='primary' />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component='a' href='#profile'>
             <ListItemAvatar>
              <Avatar src={img} sx={{width : '36px' ,height :'36px',ml : '3px'}} />
             </ListItemAvatar>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <Divider variant="middle" sx={{width : '120px' , my : '10px'}} />

          <ListItem disablePadding>
            <ListItemButton component='a' href="#watch">
              <ListItemIcon>
                <OndemandVideoIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}  />
              </ListItemIcon>
              <ListItemText primary='Watch' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <PeopleAltIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}} />
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <StorefrontIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}} />
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#gaming'>
              <ListItemIcon>
                <SportsEsportsIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}/>
              </ListItemIcon>
              <ListItemText primary='Gaming'/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#news'>
              <ListItemIcon>
                <NewspaperIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}/>
              </ListItemIcon>
              <ListItemText primary='News' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
                <PagesIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}/>
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#groups'>
              <ListItemIcon>
                <GroupsIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}/>
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton >
              <ListItemIcon>
                <ModeNight sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}/>
              </ListItemIcon>
                <Switch onChange={()=>setMode(mode ==="light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#seeall'>
              <ListItemIcon>
                <AppsIcon sx={{width : '34px' ,height :'34px',ml : '6px' , color : '#007fff'}}/>
              </ListItemIcon>
              <ListItemText primary='See all' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
    
  )
}

export default Sidebar