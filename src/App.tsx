import "./App.css";

function App() {
  return (
    <div className="app">
      <Text></Text>
      <HelloWorld></HelloWorld>
      <TodoList></TodoList>
    </div>
  );
}
function HelloWorld() {
  const text = "zara";
  return (
    <div className="hello-world">
      {text}
      The past is irreparable, the future can be changed
    </div>
  );
}
function Text() {
  return (
    <div>
      <div>过去无法挽回，未来可以改变</div>
    </div>
  );
}
function TodoList() {
  return (
    <div>
      <div>今日待办</div>
    </div>
  );
}

export default App;
