import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
  const age = 25;
  const name = "châu võ";
  const data = {
    language: "vietnamese",
    country: "vietnam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData age={age}
        name={name}
        data={data}
      />
    </div>

  )

}
export default App;