import React, { useState, useEffect, useRef } from "react";
import DropDownSearchBox from "./DropDownSearchBox";

interface Option {
  value: string;
  label: string;
}

interface CustomizeableDropDownProps {
  options: Option[];
}

const CustomizeableDropDown: React.FC<CustomizeableDropDownProps> = ({
  options,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchEnabledParam = params.get("searchEnabled");
    if (searchEnabledParam) {
      setSearchEnabled(searchEnabledParam === "true");
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option: Option) => {
    if (!selectedOptions.find((selected) => selected.value === option.value)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setInputValue("");
    setDropdownOpen(false);
  };

  const handleRemoveOption = (option: Option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected.value !== option.value)
    );
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Implement your search logic here
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div ref={containerRef} className="multi-select-dropdown">
      <div
        className="dropdown-input"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedOptions.map((option) => (
          <span key={option.value} className="selected-option">
            {option.label}
            <button
              className="remove-option"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveOption(option);
              }}
            >
              x
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Select..."
          className="input-box"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      {dropdownOpen && searchEnabled && (
        <DropDownSearchBox onSearch={handleSearch} />
      )}
      {dropdownOpen && (
        <div className="dropdown-options">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomizeableDropDown;
