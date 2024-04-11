import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./router/index.tsx";

function App() {
  return (
    <Suspense fallback={<div>1111</div>}>
      <BrowserRouter>
        {
          //遍历配置文件，生成路由列表 
          routes.map((route) => {
            return (
              //路由配置中的全部属性作为Route的属性 
              <Route {...route} />
            );
          })
        }
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
