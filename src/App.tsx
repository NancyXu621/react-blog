import Home from "./pages/home/index";
import Layout from "./pages/layout/index";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./router/index.tsx";
// import ErrorPage from "./error-page.tsx";

import "./App.css";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
// ]);

function App() {
  return (
    <div className="app">
      {/* <RouterProvider router={router} /> */}
      <div className="app_menu">
        <Layout></Layout>
      </div>
      <div className="app_content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
