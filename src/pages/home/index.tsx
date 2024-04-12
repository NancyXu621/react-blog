interface LevelContextProps {
  title: string;
  icon: number;
}

function LevelContext({ title, icon }: LevelContextProps) {
  return (
    <div className="home">
      <span>{icon}</span>
      <span>{title}</span>
      <div>Home title={title}</div>
      <div>Home icon={icon} ying'k</div>
    </div>
  );
}

function BlackHome() {
  return (
    <div>
      <button onClick={Open}>点击</button>
      <button onClick={Update}>更新</button>
      <div></div>
    </div>
  );
}

function Open(type: any) {
  if (type == "1") {
    console.log("1", type);
  } else {
    console.log("2", type);
  }
}

function Update(item: any) {
  console.log("update", item);
}

function Home(): JSX.Element {
  return (
    <div>
      <LevelContext title={"返回"} icon={1}></LevelContext>
      <BlackHome></BlackHome>
    </div>
  );
}

export default Home;
