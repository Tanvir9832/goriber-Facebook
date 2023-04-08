
import { Box } from '@mui/material';
import React from 'react'
import Post from '../post/post';
import img from './img/img.jpg'
import img2 from './img/img1.jpg';
import img3 from './img/img2.webp';
import img4 from './img/img3.jfif';

const Feed = () => {
  return (
    <Box flex={4} sx={{height : '100vh',display : 'flex',flexDirection : 'column', alignItems : 'center' }}>
      <Post img={img} img2={img2} />
      <Post img={img} img2={img3} />
      <Post img={img} img2={img4} />
      {/*<Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} />
      <Post img={img} /> */}
    </Box>
  )
}

export default Feed