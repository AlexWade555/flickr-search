import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"

function SearchPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }

return (
  <div>
    <h1>Flickr Search</h1>
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
      <button>Search</button>
    </form>
    <Outlet />
  </div>
);
}

export default SearchPage
