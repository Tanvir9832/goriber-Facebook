import {
  Fab,
  Tooltip,
  Box,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState } from "react";
import img from "../Home/img/img.jpg";

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModel = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    mb: "20px",
  });

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 40,
          left: { xs: "calc(50% - 20px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModel
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src={img} />
            <Typography> TANVIR </Typography>
          </UserBox>

          <TextField
            sx={{ width: "90%", mt: 2 }}
            multiline
            rows={2}
            placeholder="What's on your mind"
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="error" />
            <ImageIcon color="primary" />
            <VideocamIcon color="secondary" />
            <AddReactionIcon color="success" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button >Post</Button>
            <Button sx={{width : "100px"}}> <DateRangeIcon /></Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </>
  );
};

export default Add;
