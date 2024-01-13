// newscard.jsx
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
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

export default function NewsCard({
  title,
  datetime,
  image,
  description,
  index,
  onLike,
  onDislike,
  handleReadMore,
  onCloseModal,
  likes,
  dislikes,
}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const handleLikeClick = () => {
    setLikeCount((prevCount) => (prevCount === 0 ? 1 : 0));
    setDislikeCount(0);
    setLiked((prevLiked) => !prevLiked);
    setDisliked(false);
    onLike && onLike(index);
  };

  const handleDislikeClick = () => {
    setDislikeCount((prevCount) => (prevCount === 0 ? 1 : 0));
    setLikeCount(0);
    setDisliked((prevDisliked) => !prevDisliked);
    setLiked(false);
    onDislike && onDislike(index);
  };

  const handleCloseModal = () => {
    setExpanded(false);
    onCloseModal && onCloseModal();
  };

  const handleReadMoreClick = () => {
    setExpanded(true);
    handleReadMore && handleReadMore(index);
  };

  return (
    <div style={{ width: "45%", margin: "1px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "70%",
          margin: "auto", // Центрируем карточку
          color:"darkgreen",
        }}
      >
        <Typography
      variant="h6"
      noWrap
      component="a"
      href="#your-link"
      sx={{
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".1rem", // Установите желаемое расстояние между буквами
        color: "red", // Замените на цвет, который вам нужен
        textDecoration: "none",
      }}
    >
      NEWS
    </Typography>
        <Grid container>
          <Grid item xs={12} md={12}>
            <CardHeader title={title} subheader={datetime} />
            <CardMedia
              component="img"
              image={image}
              alt="Image"
              sx={{ width: "100%", height: "auto" }}
            />
            <CardContent>
              {/* Уберите условие expanded отсюда */}
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ paddingTop: 1, paddingBottom: 0, justifyContent: "space-between" }}
            >
              <IconButton aria-label="show more" onClick={handleReadMoreClick}>
                <div style={{ cursor: 'pointer' }}>
                  <Typography variant="body2" color="text.secondary">
                    {expanded ? "Скрыть" : "Подробнее"}
                  </Typography>
                </div>
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
      <Modal open={expanded} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: "auto", // Добавляем вертикальную полосу прокрутки
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 25,
              left: "10%",
              right: "10%",
              bottom: "10%",
              padding: 15,
              backgroundColor: "white",
              overflowY: "auto", // Добавляем вертикальную полосу прокрутки
              maxHeight: "80vh", // Задаем максимальную высоту
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <h1>{title}</h1>
            <Typography variant="body2" color="text.secondary">
              Datetime: {datetime}
            </Typography>
            <CardMedia
              component="img"
              image={image}
              alt="Image"
              sx={{ width: "200px", height: "200px", marginRight: "10px" }}
            />
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '8px' }}>
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
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
