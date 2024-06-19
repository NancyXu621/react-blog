interface LevelContextProps {
  title: string;
  icon: number;
}
let textList: Array<any> = ([] = [
  {
    title: "js数组的方法",
    icon: 1,
  },
  {
    title: "关于vue的基础入门知识",
    icon: 2,
  },
  {
    title: "react从入门到放弃",
    icon: 3,
  },
  {
    title: "关于js的语法",
    icon: 4,
  },
]);

function LevelContext({ title, icon }: LevelContextProps) {
  return (
    <div className="home">
      <span onClick={Open}>{icon}.</span>
      <span>{title}</span>
      <button>打卡</button>
      <button onClick={Update}>更新</button>
    </div>
  );
}
function BlackHome() {
  return (
    <div>
      {textList.map((item, key) => {
        return (
          <LevelContext
            title={item.title}
            icon={item.icon}
            key={key}
          ></LevelContext>
        );
      })}
    </div>
  );
}
/**
 * 点击
 * @param type
 */
function Open(type: any) {
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
  textList.map((item) => {
    console.log("item", item);
  });
}
/**
 * @returns
 */
function Home(): JSX.Element {
  return (
    <div className="home-content">
      {/* <LevelContext title={""} icon={1}></LevelContext> */}
      <BlackHome></BlackHome>
    </div>
  );
}

export default Home;
