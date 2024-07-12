import "./index.css";
import { useState } from "react";
let textList: Array<any> = ([] = [
  {
    title: "照片墙",
    icon: "更新",
  },
  {
    title: "文章列表",
    icon: "write",
  },
  {
    title: "新床单，电排插，床头靠背，收纳袋",
    icon: "",
  },
  {
    title: "平板,手表带,相机,拍立得,玉镯,vr眼镜,烘干机,空气炸锅",
    content: "",
  },
]);

function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  /**
   * @param type
   * @data
   */ function Open(type: any) {
    setCount(count + 1);
    if (type == "1") {
      console.log("1", type);
    } else {
      console.log("3", type);
    }
  }
  /**
   * @param type
   */
  function Upload() {
    // setCount(count + 1); 
    setCount(count.toString().length);
    console.log("更新", count);
  }
  function Delete(index: Number) {
    textList.slice(0, count.toString().length);
    console.log("删除", index);
  }
  return (
    <div className="home-content">
      {textList.map((item, index) => {
        return (
          <div key={index} className="home">
            <span>{item.icon}</span>
            <span>{item.title}</span>
            <button onClick={() => Open(item)}>打卡</button>
            <button onClick={() => Delete(index)}>删除</button>
          </div>
        );
      })}
      <div>
        <button onClick={() => Upload()}>更新</button>
        <div>todo list</div>
        <input
          type="text"
          value={count}
          onChange={(event) => {
            console.log(event.target.value);
          }}
        ></input>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
