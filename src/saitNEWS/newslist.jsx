import React from 'react';
import { useMediaQuery, useTheme, Box, ImageList, ImageListItem } from '@mui/material';
import Post from './newscard';

const NewsList = ({ posts }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  let itemsPerRow = 3;

  if (isMediumScreen) {
    itemsPerRow = 2;
  }

  if (isSmallScreen) {
    itemsPerRow = 1;
  }

  return (
    <Box mt={4}>
      <ImageList cols={itemsPerRow} gap={8}>
        {posts.map((post, index) => (
          <ImageListItem key={post.title}>
            <Post
              title={post.title}
              description={post.description}
              image={post.image}
              datetime={post.datetime}
              index={index}
              isExpanded={false}  // Всегда false, так как это список изображений
              onLike={() => console.log('Liked!')}
              onDislike={() => console.log('Disliked!')}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default NewsList;
