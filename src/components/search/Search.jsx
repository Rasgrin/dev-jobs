import "./search.scss";

import SearchIcon from "@mui/icons-material/Search";
import BackspaceIcon from "@mui/icons-material/Backspace";

import { jobs } from "../../data/jobs";

const Search = ({ searchInput, onSearchInput, searchResults, onHandleSearch, onFilter, onClear }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    onSearchInput((prev) => (prev = e.target.value));
    localStorage.setItem("searchInput", e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    onFilter((prev) => (prev = searchInput));
    localStorage.setItem("filter", searchInput);
    onHandleSearch(searchInput);
  };

  return (
    <div className="search">
      <SearchIcon className="search-icon" fontSize="large" />

      <input value={searchInput} placeholder="Filter by title, company, country or expertise..." onChange={(e) => handleInputChange(e)} onKeyDown={(e) => e.keyCode === 13 && handleSearchClick(e)}></input>
      {searchResults.length < jobs.length && (
        <button type="button" className="clear-search" onClick={onClear}>
          <BackspaceIcon fontSize="large" />
        </button>
      )}
      <button type="button" className="search-mobile" onClick={(e) => handleSearchClick(e)}>
        <SearchIcon />
      </button>
      <button type="button" className="search-desktop" onClick={(e) => handleSearchClick(e)}>
        Search
      </button>
    </div>
  );
};

export default Search;
