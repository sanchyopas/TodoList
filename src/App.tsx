import {ChangeEvent, useState} from "react";
import "./App.css";
import {v1} from "uuid";
import {Todolist} from "./components/Todolist/Todolist";

function App() {
  const [tasks, setTask] = useState([
    {id: v1(), title: "REACT", isDone: true},
    {id: v1(), title: "REDUX", isDone: false},
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "REACT ROUTING", isDone: false},
  ]);

  return (
    <div className="App">
      <div className="container">
        <div className="todolist">
          <h1 className={"todolist__title"}>TO DO</h1>
          <div className="todolist__grid">
            <Todolist title="Shopping list" tasks={tasks} />
            <Todolist title="What to learn" tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
