import { FormControl } from "react-bootstrap"


type SearchFilterProps={
    searchValue:string
    setSearchValue(text:string):void
}

function SearchFilter({searchValue,setSearchValue}:SearchFilterProps) {
  return (
    <FormControl
    style={{ maxWidth: "320px" }}
    placeholder="Search"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
  />
  )
}

export default SearchFilter