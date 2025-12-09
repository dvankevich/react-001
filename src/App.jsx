import "./App.css";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

import ArticleList from "./components/ArticleList.jsx";
import SearchForm from "./components/SearchForm.jsx";

import { fetchArticlesWithTopic } from "./articles-api.js";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      console.log(data);

      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
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
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
