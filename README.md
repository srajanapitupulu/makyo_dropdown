# Makyo Dropdown

A customizable dropdown component for React app.
This repository is use for technical project challenge as an application in Makyo.Co.

## Installation

To set up this React application, follow these steps:

1. **Clone the Repository**

```bash
git clone https://github.com/srajanapitupulu/makyo_dropdown.git
```

2. **Navigate to the Project Directory**

```bash
cd makyo_dropdown
```

3. **Install Dependencies**
   Firstly, ensure you have Node.js and npm installed. Install the necessary dependencies:

```bash
npm install
```

## Running the Application

### To run the application locally:

1. **Start the Development Server**
   You can run this command to start the development server.

```bash
npm start
```

This will start the development server and open the application in your default web browser at http://localhost:3000.

2. **Build the Application**
   To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the build directory.

## Using the Package in Create React App

### Local Path

1. **Build Your Package**
   Navigate to your package directory and build it:

```bash
npm run build
```

2. **Link the Package**
   Create a symbolic link to your local package:

```bash
npm link
```

Then, in your Create React App project directory:

```bash
npm link your-package-name
```

2. **Import and Use the Package**
   In your Create React App project, import and use the component:

```javascript
import React from "react";
import { MultiSelectDropdown } from "your-package-name";

function App() {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="App">
      <h1>MultiSelect Dropdown</h1>
      <MultiSelectDropdown options={options} enableSearch={true} />
    </div>
  );
}

export default App;
```

## Git Repository

1. **Add the Repository as a Dependency**
   In your Create React App project's package.json, add the package repository URL:

```json
{
  "dependencies": {
    "your-package-name": "git+https://github.com/your-username/your-repo-name.git"
  }
}
```

2. **Install Dependencies**
   Install the package from the Git repository:

```bash
npm install
```

3. **Import and Use the Package**

In your Create React App project, import and use the component:

```javascript
import React from "react";
import { MultiSelectDropdown } from "your-package-name";

function App() {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="App">
      <h1>MultiSelect Dropdown</h1>
      <MultiSelectDropdown options={options} enableSearch={true} />
    </div>
  );
}

export default App;
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details.
