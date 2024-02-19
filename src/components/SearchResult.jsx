import "../css/SearchResult.css";

function SearchResult({ result }) {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      <p>{result.title}</p>
      <p>{result.author}</p>
    </div>
  );
}

export default SearchResult;
