// newsapp.jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from "react-router-dom";

// Основной компонент
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

// Компонент для списка новостей
export function NewsList() {
  const history = useHistory();

  const handleReadMore = (postId) => {
    history.push(`/news/${postId}`);
  };

  const NewsCard = ({ postId, title }) => (
    <div>
      <h3>{title}</h3>
      <Link to={`/news/${postId}`} onClick={() => handleReadMore(postId)}>
        <button>Подробнее</button>
      </Link>
    </div>
  );

  return (
    <div>
      <h2>Список новостей</h2>
      <ul>
        <li>
          <NewsCard postId="1" title="Заголовок новости 1" />
        </li>
        <li>
          <NewsCard postId="2" title="Заголовок новости 2" />
        </li>
        {/* Добавьте другие новости по аналогии */}
      </ul>
    </div>
  );
}

// Компонент для отображения подробной информации о новости
function NewsDetail() {
  const { id } = useParams();

  // Получите данные о новости по id (замените на свою логику)
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
