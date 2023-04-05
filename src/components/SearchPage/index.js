import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

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
    <Stack>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
      <button>Search</button>
    </Stack>
    </form>
    <Outlet />
  </div>
);
}

export default SearchPage
