import "./index.css";
const user = {
  name: "Nancy",
  room: "云的空间",
  avatar: "https://avatars.githubusercontent.com/u/5178390?s=460&v=4",
  bio: "一个喜欢编程，喜欢写代码的程序猿",
};

export function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-header"></div>
        <div className="about-footer">
          <div className="about-footer-item">{user.name}</div>
          <div className="about-footer-item">{user.room}</div>
          <div className="about-footer-item">{user.bio}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
