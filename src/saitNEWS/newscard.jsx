// newscard.jsx
import React, { useState, useEffect } from "react";
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
  ClickAwayListener,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const AdaptiveCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%', // Используем 100% ширины на мобильных устройствах
  margin: '10px', // Задайте нужное значение отступа
  color: 'darkgreen',
  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Изменяем ширину для экранов менее 700px
  },
}));

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
  id,
}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false); 
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const { id: routeId } = useParams();

  useEffect(() => {
    if (routeId === id) {
      handleReadMoreClick();
    }
  }, [routeId, id]);

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
    <>
      <AdaptiveCard>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to={`/news/${id || index}`} // Исправлено: теперь используется id вместо index
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "red",
            textDecoration: "none",
          }}
        >
          NEWS
        </Typography>
        <Grid container>
          <Grid item xs={12} md={12}>
            <CardHeader title={title} />
            <CardMedia
              component="img"
              image={image}
              alt="Image"
              sx={{ width: "100%", height: "auto" }}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                display="flex"
                justifyContent="space-between"
              >
                {datetime}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                paddingTop: 1,
                paddingBottom: 0,
                justifyContent: "space-between",
              }}
            >
              <IconButton aria-label="show more" onClick={handleReadMoreClick}>
                <div style={{ cursor: "pointer" }}>
                  <Typography variant="body2" color="text.secondary">
                    {expanded ? "Скрыть" : "Подробнее"}
                  </Typography>
                </div>
              </IconButton>
            </CardActions>
          </Grid>
          </Grid>
      </AdaptiveCard>
      <Modal open={expanded} onClose={handleCloseModal}>
        <ClickAwayListener onClickAway={handleCloseModal}>
          <div
            style={{
              position: "absolute",
              top: 25,
              left: "10%",
              right: "10%",
              bottom: "10%",
              padding: 15,
              backgroundColor: "white",
              overflowY: "auto",
              maxHeight: "80vh",
            }}
          >
              <IconButton
  onClick={() => {
    navigator.clipboard.writeText(`http://localhost:3000/news/${id || index}`);
    setCopied(true);

    // Устанавливаем таймер для сброса статуса "Скопировано" через 1 секунду
    setTimeout(() => {
      setCopied(false);
    }, 1000);

    // Если есть routerHistory, то делаем редирект на новость
    if (history) {
      history.push(`/news/${id || index}`);
    } else {
      // Если нет routerHistory, открываем модальное окно напрямую
      handleReadMoreClick();
    }
  }}
  style={{ position: "absolute", top: 0, left: 0 }}
>
  <ShareIcon />
</IconButton>

{copied && <div style={{ color: "green" }}>Скопировано</div>}

            <h1>{title}</h1>
            <CardMedia
              component="img"
              image={image}
              alt="Image"
              sx={{ width: "200px", height: "200px", marginRight: "10px" }}
            />
            <Typography variant="body3" color="black" style={{ fontWeight: 'bold' }}>
              {datetime}
            </Typography>
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
        </ClickAwayListener>
      </Modal>
    </>
  );
}
