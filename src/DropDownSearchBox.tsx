import React, { useState } from "react";
import { clearIcon, searchIcon } from "./svg_helper";

interface DropDownSearchBoxProps {
  savedQuery: string;
  onSearch: (query: string) => void;
}

const DropDownSearchBox: React.FC<DropDownSearchBoxProps> = ({
  savedQuery,
  onSearch,
}) => {
  //Searchbox functionalities
  const [query, setQuery] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleClearInput = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="search-box">
      <div className="search-icon">{searchIcon()}</div>
      <input
        type="text"
        value={query == "" ? savedQuery : query}
        onChange={handleSearchInputChange}
        className="search-input"
      />
      {query && (
        <button className="clear-icon" onClick={handleClearInput}>
          {clearIcon()}
        </button>
      )}
    </div>
  );
};

export default DropDownSearchBox;
