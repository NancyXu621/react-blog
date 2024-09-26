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
      <div className="home-content-left-box">
        <h2 className="home-content-left-box-title">关于Nancy</h2>
        <p>主页：http://Nancy.com</p>
        <p>邮箱：3219872797@qq.com</p>
        <p>代码库：https://github.com/NancyXu621</p>
        <p>
          大家好，我是XuNancy。在是一位码农前，我是搞艺术的学设计的。大学专业学的有两个方向，一是UI设计师方向跟现在的工作有点关系吧，二是剪辑师方向，自导自剪了一个10分钟的微电影。
          为什么当程序员这个说起来很突然，刚刚毕业的我非常非常迷茫，根本不知道干嘛。于是来到了杭州这座城市，所幸运的是我有两个互联网大佬的舅舅，因此在我两个大佬舅舅的教学下，我！！！迈入啦互联网咯!!!。
          关于我对互联网的个人感受,我对自己写一个大家都去用的功能，会觉得很酷很有成就感，最关键的是干这行，钱他真的多啊。最后的关键就是我的偶像马斯克啦，虽然我可能是做不到他这样的成就，
          但是我会以偶像为目标🎯，努力成为更好的自己。
        </p>
      </div>
    </div>
  );
}

export default Writing;
