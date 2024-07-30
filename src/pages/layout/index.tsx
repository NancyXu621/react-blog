import "./index.css";
import routes from "../../router/index";

function Layout() {
  return (
    <div className="menu">
      {routes.map((item, key) => {
        return (
          <div className="menu_item" key={key} onClick={() => {}}>
            <a className="a" href={item.path}>
              {item.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
export default Layout;
