import React from "react";
import CustomizableDropDown from "./CustomizeableDropDown";

const dropdownOptions = [
  { value: "label long 1", label: "label long 1" },
  { value: "label long long 2", label: "label long long 2" },
  { value: "label long long long 3", label: "label long long long 3" },
  {
    value: "label long long long long 4",
    label: "label long long long long 4",
  },
  {
    value: "label long long long long long 5",
    label: "label long long long long long 5",
  },
  {
    value: "label long long long long long long 6",
    label: "label long long long long long long 6",
  },
  {
    value: "label long long long long long long long 7",
    label: "label long long long long long long long 7",
  },
  {
    value: "label long long long long long long long long 8",
    label: "label long long long long long long long long 8",
  },
  {
    value: "label long long long long long long long long long 9",
    label: "label long long long long long long long long long 9",
  },
  {
    value: "label long long long long long long long long long long 10",
    label: "label long long long long long long long long long long 10",
  },
];

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CustomizableDropDown options={dropdownOptions} />
    </div>
  );
};

export default App;
