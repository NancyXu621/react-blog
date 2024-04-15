// App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
