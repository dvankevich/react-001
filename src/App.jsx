import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import ArticleList from "./ArticleList";

import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
        // Тут будемо обробляти помилку
        console.error("Error fetching articles:", error);
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && (
        <ClipLoader
          color={"green"}
          loading={loading}
          cssOverride={override}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
