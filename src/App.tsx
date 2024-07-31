import React from "react";
import CustomizableDropDown from "./CustomizeableDropDown";

const dropdownOptions = [
  { value: "label 1", label: "label 1" },
  { value: "label 2", label: "label 2" },
  { value: "label 3", label: "label 3" },
  { value: "label 4", label: "label 4" },
  { value: "label 5", label: "label 5" },
  { value: "label 6", label: "label 6" },
  { value: "label 7", label: "label 7" },
  { value: "label 8", label: "label 8" },
  { value: "label 9", label: "label 9" },
  { value: "label 10", label: "label 10" },
];

const App: React.FC = () => {
  return (
    <div className="app-container">
      {" "}
      he k
      <CustomizableDropDown options={dropdownOptions} />
    </div>
  );
};

export default App;
