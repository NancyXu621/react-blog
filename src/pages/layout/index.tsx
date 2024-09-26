import "./index.css";
import routes from "../../router/index";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="menu">
      {routes.map((item, key) => {
        return (
          <nav className="menu_item" key={key} onClick={() => {}}>
            <Link to={item.path}>{item.name}</Link>
          </nav>
        );
      })}
    </div>
  );
}
export default Layout;
