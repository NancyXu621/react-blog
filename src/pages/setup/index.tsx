import "./index.css";
function SetUp() {
  return (
    <div className="setup">
      <div>文章</div>
      <div></div>
    </div>
  );
}
SetUp.getInitialProps = async () => {
  return {
    title: "SetUp",
  };
};
export default SetUp;
