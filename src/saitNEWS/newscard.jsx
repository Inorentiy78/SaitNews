// NewsCard.jsx
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Modal,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useHistory } from "react-router-dom";
import CountLaik from "./countlaik";

export default function NewsCard({
  title,
  datetime,
  image,
  description,
  index,
  onLike,
  onDislike,
  isExpanded,
}) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const expanded = isExpanded || false;
  const history = useHistory();

  const handleLikeClick = () => {
    setLikeCount((prevCount) => (prevCount === 0 ? 1 : 0));
    setDislikeCount(0);
    setLiked((prevLiked) => !prevLiked);
    setDisliked(false);
    onLike && onLike();
  };

  const handleDislikeClick = () => {
    setDislikeCount((prevCount) => (prevCount === 0 && liked ? 1 : 0));
    setLikeCount(0);
    setDisliked((prevDisliked) => !prevDisliked);
    setLiked(false);
    onDislike && onDislike();
  };

  const handleCloseModal = () => {
    history.push("/news"); // Redirect back to the main news page
  };

  return (
    <Card
      sx={{
        maxHeight: { xs: "100%", sm: "80%", md: "80%", lg: "80%" },
        height: expanded ? "auto" : "100%",
        transition: "transform 0.3s",
        transform: expanded ? "scale(1.1)" : "scale(1)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
        width: "80vh",
        margin: "100px",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={expanded ? 6 : 12}>
          <CardHeader title={title} subheader={datetime} />
          <CardMedia
            component="img"
            image={image}
            alt="Image"
            sx={{ width: "100%", height: "auto" }}
          />
          <CardActions
            disableSpacing
            sx={{ paddingTop: 1, paddingBottom: 0, justifyContent: "space-between" }}
          >
            <div>
              <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
                <ThumbUpOffAltIcon sx={{ color: liked ? "red" : "gray" }} />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {likeCount}
              </Typography>
            </div>
            <div>
              <IconButton aria-label="add to favorites" onClick={handleDislikeClick}>
                <ThumbDownOffAltIcon sx={{ color: disliked ? "red" : "gray" }} />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {dislikeCount}
              </Typography>
            </div>
            <IconButton aria-label="show more">
              <Link to={`/news/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body2" color="text.secondary">
                  Подробнее
                </Typography>
              </Link>
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
      {expanded && (
        <Modal open={expanded} onClose={handleCloseModal}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
            <div style={{ position: "absolute", top: 25, left: "10%", right: "10%", padding: 15 }}>
              <IconButton
                onClick={handleCloseModal}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <CloseIcon />
              </IconButton>
              <h1>{title}</h1>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          </div>
        </Modal>
      )}
    </Card>
  );
}
