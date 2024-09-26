import "./index.css";
const homeInfo = [
  {
    title: "关于我",
    content: "我是一名前端开发工程师，热爱编程，喜欢挑战自我，追求卓越。",
  },
  {
    title: "我的技能",
    content: "熟悉HTML、CSS、JavaScript，了解React、Vue等前端框架，熟悉Node.js后端开发。",
  },
  {
    title: "我的项目",
    content: "参与开发多个前端项目，包括电商平台、企业官网等。",
  },
  {
    title: "我的经历",
    content: "曾在多家互联网公司实习，积累了丰富的项目经验。",
  },
  {
    title: "我的联系方式",
    content: "邮箱：3219872797@qq.com",
  }
];

function Home(): JSX.Element {
  return (
    <div className="home-content">
      <div className="home-header-box">
        <div className="home-header-left-box">
          <div className="home-content-title">XU NANCY</div>
          <div className="home-content-p">过去无法挽回，未来可以改变</div>
        </div>
      </div>
      <div className="home-content-box">
        <div className="home-content-right">
        <div className="home-content-right—title">过去无法挽回，未来可以改变</div>
          <div>
            <input placeholder="搜索"></input>
          </div>
        </div>
        <div className="home-content-left">
       
        </div>
      </div>
    </div>
  );
}

export default Home;
