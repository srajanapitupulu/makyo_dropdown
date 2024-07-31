import React, { useState } from "react";

interface DropDownSearchBoxProps {
  onSearch: (query: string) => void;
}

const DropDownSearchBox: React.FC<DropDownSearchBoxProps> = ({ onSearch }) => {
  //Searchbox functionalities
  const [query, setQuery] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="search-box">
      <div className="search-icon">🔍</div>
      <input
        type="text"
        value={query}
        onChange={handleSearchInputChange}
        onKeyPress={handleKeyPress}
        placeholder="search"
        className="search-input"
      />
    </div>
  );
};

export default DropDownSearchBox;
