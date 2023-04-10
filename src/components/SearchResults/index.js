import { useParams } from "react-router-dom"


const SearchResults = () => {
  const params = useParams()
  return (
    <>
      <p>Search results for {params.queryText}</p>
      <p>"According to &quot;Star Wars&quot; lore, which planet does Obi-Wan Kenobi come from?"</p>
    </>
  )
}

export default SearchResults
