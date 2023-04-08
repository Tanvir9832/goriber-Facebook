import React,{useState} from 'react'
import { Favorite, MoreVert, Share } from '@mui/icons-material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
const Post = ({img,img2}) => {
    const [checked , setChecked] = useState(false);
  return (
    <div><Card sx={{height : "auto", width : {xs :'auto' ,md : '650px'},my : '1rem'}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} src={img} />
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert verticle />
        </IconButton>
      }
      title="TANVIR"
      subheader="December 25, 1969"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Go through all the recurring activities in your log one by one. What would happen if you would stop doing them?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam ducimus praesentium non architecto est corporis aliquam! Voluptatum eveniet hic, ad tempore aspernatur illo distinctio iste similique at, aliquam dolores a, veniam ipsum! Iusto culpa, voluptatibus eveniet ipsum blanditiis quaerat.
      </Typography>
    </CardContent>
    <CardMedia
      component="img"
      sx={{height : {xs: "400",lg: '650px'},
      width : {xs: "400",lg: '650px'}}}
      image={img2}
      alt="Paella dish"
    />
    <CardActions sx={{display: 'flex', gap :'3px',justifyContent : 'center'}}>
      <IconButton onClick={()=> setChecked(!checked)} >
        <Favorite style={checked ? {color : 'red'} : {}} />
      </IconButton>
      <IconButton >
        <ChatBubbleIcon />
      </IconButton>
      <IconButton>
        <Share />
      </IconButton>
     </CardActions>
  </Card></div>
  )
}

export default Post