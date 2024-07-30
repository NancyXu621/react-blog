// App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router/index";
import Layout from "./pages/layout/index";
function App() {
  return (
    <div className="App">
      <div className="Content">
        <Layout></Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
