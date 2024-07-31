import React, { useState } from "react";

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

  return (
    <div className="search-box">
      <div className="search-icon">🔍</div>
      <input
        type="text"
        value={query == "" ? savedQuery : query}
        onChange={handleSearchInputChange}
        className="search-input"
      />
    </div>
  );
};

export default DropDownSearchBox;
