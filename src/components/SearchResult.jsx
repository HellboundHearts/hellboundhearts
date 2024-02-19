function SearchResult({ result }) {
  return (
    <div>
      <p>{result.title}</p>
      <p>{result.author}</p>
    </div>
  );
}

export default SearchResult;
