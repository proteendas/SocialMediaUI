import React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

import data from "./postItems.json";

export const Rightbar = () => {
  const [itemData, setItemData] = useState(data);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/20793649/pexels-photo-20793649/free-photo-of-man-taking-a-picture-of-bamboo-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/3379275/pexels-photo-3379275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/3379279/pexels-photo-3379279.jpeg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/5490263/pexels-photo-5490263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="John Doe"
            src="https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
