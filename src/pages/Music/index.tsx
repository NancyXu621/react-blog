import "./index.css";
const musicList = [
  {
    id: 1,
    name: "R&B",
    url: "https://music.163.com/#/playlist?id=2974580",
  },
];
export function Music() {
  return (
    <div className="my-music">
      <div>我喜欢的歌</div>
      <select id="musicTypes" name="musicTypes" multiple="multiple">
        <option selected="selected">R&B</option>
        <option>爵士</option>
        <option>布鲁斯</option>
        <option>新纪元</option>
        <option>古典</option>
        <option>歌剧</option>
      </select>
      {musicList.map((item) => {
        return (
          <div key={item.id}>
            <a href={item.url} target="_blank">
              {item.name}
            </a>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}
export default Music;
