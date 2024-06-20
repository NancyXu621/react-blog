function SetUp() {
  return (
    <div>
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
