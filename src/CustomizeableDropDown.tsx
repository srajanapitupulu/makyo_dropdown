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
  const [multiselectEnabled, setMultiselectEnabled] = useState<boolean>(false);
  const [outlinedStyleEnabled, setOutlinedStyleEnabled] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchEnabledParam = params.get("search");
    const outlinedStyleEnabledParam = params.get("outlined");
    if (searchEnabledParam) {
      setSearchEnabled(searchEnabledParam === "true");
    }
    if (outlinedStyleEnabledParam) {
      setOutlinedStyleEnabled(outlinedStyleEnabledParam === "true");
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

  const handleOptionClick = (option: Option) => {
    if (!selectedOptions.find((selected) => selected.value === option.value)) {
      setSelectedOptions([...selectedOptions, option]);
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
    <div>
      <div ref={containerRef} className="multi-select-dropdown">
        <div
          className={
            outlinedStyleEnabled ? "dropdown-input-outlined" : "dropdown-input"
          }
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="selected-option-container">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <span key={option.value} className="selected-option">
                  {option.label}
                  <button
                    className="remove-option"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveOption(option);
                    }}
                  >
                    &#x2297;
                  </button>
                </span>
              ))
            ) : (
              <span></span>
            )}
          </div>
          {/* <div className="chevron">&#x2304;</div> */}
          <svg
            className="chevron"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className={dropdownOpen ? "dropdown-container" : ""}>
          {dropdownOpen && searchEnabled && (
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
