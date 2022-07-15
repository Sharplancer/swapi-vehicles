import {
  Box,
  Input,
  InputAdornment,
} from '@mui/material'

import { SearchBoxStyle } from "./index.style"

import SearchIcon from '@mui/icons-material/Search'

const SearchBox = ({ onKeyDown }) => {
  
  const handleKeyDown = (e) => {
    onKeyDown(e)
  }

  return (
    <SearchBoxStyle>
      <Input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </SearchBoxStyle>
  )
}

export default SearchBox