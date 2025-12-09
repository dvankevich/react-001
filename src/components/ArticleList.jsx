const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectID, url, title, created_at, updated_at }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}{" "}
          {`(Created: ${new Date(
            created_at
          ).toLocaleDateString()}, Updated: ${new Date(
            updated_at
          ).toLocaleDateString()})`}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
