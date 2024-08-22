import "./index.css";
const writingList = [
  {
    title: "年度总结",
  },
  {
    title: "关于我的前端",
  },
  {
    title: "前端知识",
  },
  {
    title: "其他知识拓展",
  },
];
export function Writing() {
  return (
    <div className="writing">
      {writingList.map((item, index) => (
        <div className="writing-item" key={index}>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Writing;
