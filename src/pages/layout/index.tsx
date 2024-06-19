import "./index.css";

function Layout() {
  let list = [
    {
      path: "home",
      name: "首页",
    },
    {
      path: "writing",
      name: "文章",
    },
    {
      path: "Travel",
      name: "旅游",
    },
    {
      path: "Music",
      name: "音乐",
    },
    {
      path: "Setting",
      name: "设置",
    },
    {
      path: "About",
      name: "关于",
    },
  ];
  const onClick = () => {
    console.log("click");
  };
  return (
    <div className="menu">
      {list.map((item, key) => {
        return (
          <div className="menu_item" key={key}>
            <a href={item.path}> {item.name}</a>
            <button onClick={onClick}>111</button>
          </div>
        );
      })}
    </div>
  );
}
export default Layout;
