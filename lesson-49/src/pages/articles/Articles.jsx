import { useFetch } from "../../hooks/useFetch";
import { NavLink } from 'react-router-dom'

function Articles() {
  const {
    data: articles,
    error,
    isPending,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="article-container">
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {isPending && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id} className="card">
              <h2>{article.title}</h2>
              <p>By {article.author}</p>
              <NavLink to="">Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
