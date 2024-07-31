import React, { useState, useEffect, useRef } from "react";
import DropDownSearchBox from "./DropDownSearchBox";
import { chevronDownIcon, clearIcon } from "./svg_helper";
import "./dropdown.css";

interface Option {
  value: string;
  label: string;
}

interface CustomizeableDropDownProps {
  options: Option[];
  search: boolean;
  outlined: boolean;
  multiselect: boolean;
}

const CustomizeableDropDown: React.FC<CustomizeableDropDownProps> = ({
  options,
  search = false,
  outlined = false,
  multiselect = false,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleOptionClick = (option: Option) => {
    if (!selectedOptions.find((selected) => selected.value === option.value)) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      handleRemoveOption(option);
    }
  };

  const handleRemoveOption = (option: Option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected.value !== option.value)
    );
  };

  const handleSearch = (query: string) => {
    setInputValue(query);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const highlightedOptionText = (text: string, highlightedText: string) => {
    const parts = text.split(new RegExp(`(${highlightedText})`, "gi"));
    return (
      <span>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              part.toLowerCase() === highlightedText.toLowerCase()
                ? "highlight"
                : ""
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="app-container">
      <div ref={containerRef} className="multi-select-dropdown">
        <div
          className={"dropdown-input " + (outlined && "dropdown-outlined")}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="selected-option-container">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <span key={option.value} className="selected-option">
                  {option.label}
                  <button
                    className="clear-icon grey-color"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveOption(option);
                    }}
                  >
                    {clearIcon()}
                  </button>
                </span>
              ))
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
          <span className="chevron-icon">{chevronDownIcon()}</span>
        </div>
        <div className={dropdownOpen ? "dropdown-container" : ""}>
          {dropdownOpen && search && (
            <DropDownSearchBox
              onSearch={handleSearch}
              savedQuery={inputValue}
            />
          )}
          {dropdownOpen && (
            <div>
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={
                    selectedOptions.includes(option)
                      ? "dropdown-option-selected"
                      : "dropdown-option"
                  }
                  onClick={() => handleOptionClick(option)}
                >
                  {highlightedOptionText(option.label, inputValue)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizeableDropDown;
