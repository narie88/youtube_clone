import React, { memo } from "react";
import SearchForm from "components/searchForm";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <a href="#none">로고</a>
      <SearchForm onSearch={onSearch} />
    </div>
  );
};

export default memo(SearchBar);
