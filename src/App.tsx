// App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router/index";

function App() {
  console.log(routes)
  return (
    <div className="App">
      {/* <Router> */}
       
          {/* 定义路由 */}
          <Routes>
          
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {/* 特别添加的SetUp路由 */}
          </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
