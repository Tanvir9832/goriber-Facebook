import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { AppBar,Toolbar,styled, Typography, InputBase, Badge ,Avatar, useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material'


import img from './Home/img/img.jpg'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display : 'flex',
  justifyContent : 'space-between',
  gap: "20px",
})

const Search = styled('Textfield')(({theme})=>({
  backgroundColor : "white",
  color : "black",
  padding : '0 10px',
  width : '40%',
  borderRadius : theme.shape.borderRadius,
  display : 'flex',
  
}));
const Icon = styled('Box')(({theme})=>({
  display : 'flex',
  gap : '20px',
  alignItems : 'center'
}));
const UserAvater = styled('Box')(({theme})=>({
  display : 'flex',
  alignItems : 'center',
  gap : 5
}))

const Navbar = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' sx={{padding : '0.8rem' , mb : 2}} >
      
      <StyledToolbar>
        <Typography sx={{display : {xs : 'none' , md:"block"}}} variant='h6'>GORIBER FACEBOOK</Typography>
        <FacebookIcon sx={{fontSize: '2.2rem',display : {xs : "block" , md : "none"}}} />
        <Search>
        <SearchIcon sx={{color : 'gray' ,mt : 0.78}} />
          <InputBase placeholder='searching...'/>
        </Search>
        {
          isMatch ? (<Icon>
          <Badge badgeContent={5} color='error'>
            <EmailIcon />
          </Badge>
          <Badge badgeContent={3} color='error' >
            <NotificationsActiveIcon />
          </Badge>
          <Avatar id='menu' sx={{ width : '50px', height : '50px'}} alt="Tanvir" src={img} onClick={()=>setOpen(true)} />
        </Icon>)
        :
        (<UserAvater>
          <Avatar sx={{ width : '50px', height : '50px'}} alt="Tanvir" src={img} onClick={()=>setOpen(true)} />
          <Typography sx={{fontSize : 'bold'}} onClick={()=> setOpen(true)}>Tanvir</Typography>
        </UserAvater>)
        }
      </StyledToolbar>
      <Menu id='menu' open={open}
      onClose={()=>setOpen(false)}
      anchorOrigin={{
        vertical : "top",
        horizontal : "right"
      }}
      sx={{position : "absolute" ,top :"70px" ,left :{xs :"-70px", md :  "-30px"}}}
      >
        <MenuItem onClick={()=>setOpen(false)}> Profile </MenuItem>
        <MenuItem onClick={()=>setOpen(false)}> Logout </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar