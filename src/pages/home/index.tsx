import "./index.css";
import { useState } from "react";
let textList: Array<any> = ([] = [
  {
    title: "照片墙",
    icon: "更新",
  },
  {
    title: "文章列表",
    iocn: "write",
  },
]);

function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  /**
   * 点击
   * @param type
   * @data
   */ function Open(type: any) {
    setCount(count + 1);
    if (type == "1") {
      console.log("1", type);
    } else {
      console.log("2", type);
    }
  }
  /**
   * 更新数据
   * @param item
   */
  function Update(item: any) {
    console.log("update", item);
  }
  return (
    <div className="home-content">
      <div></div>
      {textList.map((item, index) => {
        return (
          <div key={index} className="home">
            <span>{item.icon}</span>
            <span>{item.title}</span>
            <button onClick={() => Open(item)}>打卡</button>
            <button onClick={() => Update(item)}>更新数据</button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
