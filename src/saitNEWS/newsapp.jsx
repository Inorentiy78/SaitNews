import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom"; // Добавлен импорт useParams
import NewsCard from "./newscard";
import NewsList from "./newslist";

export default function NewsApp() {
  return (
    <Router>
      <Switch>
        <Route path="/news/:id" children={<NewsDetail />} />
        <Route path="/" children={<NewsList />} />
      </Switch>
    </Router>
  );
}

function NewsDetail() {
  const { id } = useParams();

  const newsData = {
    title: `Заголовок новости ${id}`,
    content: `Содержание новости ${id}`,
  };

  return (
    <div>
      <h2>{newsData.title}</h2>
      <p>{newsData.content}</p>
    </div>
  );
}
