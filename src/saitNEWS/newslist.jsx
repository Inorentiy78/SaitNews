// newslist.jsx
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Post from "./newscard";
import NewsApp from "./newsapp";

export default function NewsList({ posts }) {
  const [expandedNewsIndex, setExpandedNewsIndex] = useState(null);

  const onReadMore = (index) => {
    setExpandedNewsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Проверка наличия свойства posts перед его использованием
  if (!posts) {
    return null;
  }

  return (
    <Box mt={4}>
      <Grid container spacing={4} justifyContent="center">
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index} style={{ margin: 0, padding: 0, maxWidth: "48%", maxHeight: "1%" }}>
            <Post
              title={post.title}
              datetime={post.datetime}
              description={post.description}
              image={post.image}
              index={index}
              isExpanded={index === expandedNewsIndex}
              onLike={() => console.log("Liked!")}
              onDislike={() => console.log("Disliked!")}
            />
          </Grid>
        ))}
      </Grid>

      <NewsApp />
    </Box>
  );
}
