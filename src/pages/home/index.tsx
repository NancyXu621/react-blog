import "./index.css";

function Home(): JSX.Element {
  return (
    <div className="home-content">
      <div className="home-header-box">
        <div className="home-content-right">
          <img
            className="home-content-right-img"
            src="../../assets/homepage.jpg"
          />
        </div>
        <div className="home-content-left">
          <div className="home-content-left-box">
            <h2 className="home-content-left-box-title">关于Nancy</h2>
            <p>主页：http://Nancy.com</p>
            <p>邮箱：3219872797@qq.com</p>
            <p>代码库：https://github.com/NancyXu621</p>
            <p>
              大家好，我叫简夹克，英文名Xu
              Nancy。在是一位码农前我是搞艺术的学设计的。大学专业学的两个方向，一是UI设计师跟现在的工作有点关系吧，二是剪辑师，自导自剪一个10分钟的微电影。
              为什么当程序员这个说起来很突然，刚刚毕业的我非常非常迷茫，根本不知道应该干嘛。来到了杭州这座城市，所幸运的是我有两个互联网大佬的舅舅，因此在我两个舅舅的教学下，迈入了互联网。
              关于我对互联网的个人感受是我觉得自己写一个大家都有的功能很酷很有成就感，最关键的是这行他钱真的多啊。再就是我的偶像马斯克的影响，我对互联网更加的热爱，希望有一天可以跟我的偶像
              见面，一起做点事情。
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
