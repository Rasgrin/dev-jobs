import "./home.scss";

import SearchOffIcon from "@mui/icons-material/SearchOff";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import JobContainer from "../../components/jobContainer/JobContainer";
import Search from "../../components/search/Search";

import { useEffect, useState } from "react";
import { jobs } from "../../data/jobs";

const Home = ({ resultsCount, onResultsCount, searchResults, onSearchResults }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilter((prev) => (prev = localStorage.getItem("filter") || ""));
    setSearchInput((prev) => (prev = localStorage.getItem("searchInput") || ""));
  });

  const handleSearch = (input = "") => {
    onSearchResults([]);
    jobs.map((job) => {
      const company = job.company.split(" ");
      const expertise = job.expertise.split(" ");

      if (
        company
          .find((_, i) => i === 0)
          .toLowerCase()
          .startsWith(input.toLowerCase()) ||
        company
          .find((_, i) => i === 1)
          .toLowerCase()
          .startsWith(input.toLowerCase()) ||
        expertise
          .find((_, i) => i === 0)
          .toLowerCase()
          .startsWith(input.toLowerCase()) ||
        expertise
          .find((_, i) => i === 1)
          .toLowerCase()
          .startsWith(input.toLowerCase()) ||
        (expertise.length === 3 &&
          expertise
            .find((_, i) => i === 2)
            .toLowerCase()
            .startsWith(input.toLowerCase())) ||
        job.type.toLowerCase().startsWith(input.toLowerCase()) ||
        job.country.toLowerCase().startsWith(input.toLowerCase())
      ) {
        onSearchResults((current) => [...current, job]);
      }
    });
  };

  const handleClear = () => {
    localStorage.removeItem("filter");
    localStorage.removeItem("searchInput");
    handleSearch();
  };

  return (
    <div className="home">
      <Search filter={filter} searchInput={searchInput} onSearchInput={setSearchInput} searchResults={searchResults} onHandleSearch={handleSearch} onFilter={setFilter} onClear={handleClear} />

      {searchResults.length !== 0 && searchResults.length < jobs.length && (
        <div className="results">
          <h2>{searchResults.length} RESULTS</h2>
          {filter && (
            <button onClick={handleClear}>
              <HighlightOffIcon fontSize="small" />
              {filter}
            </button>
          )}
        </div>
      )}

      <div className="search-results" style={{ marginTop: searchResults.length !== 0 && searchResults.length < jobs.length ? "15px" : "60px" }}>
        {searchResults.map((job, i) => i < resultsCount && <JobContainer data={job} key={i} />)}
        {searchResults.length === 0 && (
          <div className="not-found">
            <SearchOffIcon fontSize="large" />
            <h1>NO RESULTS FOUND</h1>
            <p>Sorry, your search didn't match any of the job listings</p>
          </div>
        )}
      </div>

      {searchResults.length > resultsCount && (
        <button
          onClick={() => {
            onResultsCount((prev) => (prev *= 2));
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
