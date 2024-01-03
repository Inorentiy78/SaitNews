import { useState } from 'react';
import * as React from "react";
import post from "./post";
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMore from '@mui/icons-material/ExpandMore';

const YourComponent = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);
      setLikesCount(likesCount + 1);
    } else {
      setLiked(false);
      setLikesCount(likesCount - 1);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDisliked(true);
      setLiked(false);
      setDislikesCount(dislikesCount + 1);
    } else {
      setDisliked(false);
      setDislikesCount(dislikesCount - 1);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <IconButton aria-label="like" onClick={handleLikeClick}>
        <ThumbUpOffAltIcon sx={{ color: liked ? "red" : "gray" }} />
      </IconButton>
      <IconButton aria-label="dislike" onClick={handleDislikeClick}>
        <ThumbDownOffAltIcon sx={{ color: disliked ? "red" : "gray" }} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {/* Ваш дополнительный контент */}
      </ExpandMore>
      <div>
        Likes: {likesCount}, Dislikes: {dislikesCount}
      </div>

      {/* Используйте компонент post из ссылки */}
      {post}
    </div>
  );
};

export default YourComponent;
