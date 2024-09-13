import {ChangeEvent, useState} from "react";
import "./App.css";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";
import {v1} from "uuid";

function App() {
  // state input add task
  const [value, setValue] = useState("");

  // changed state input value
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setValue(event.currentTarget.value);
  };

  const [tasks, setTask] = useState([
    {id: v1(), title: "REACT", isDone: true},
    {id: v1(), title: "REDUX", isDone: false},
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "REACT ROUTING", isDone: false},
  ]);

  const addTask = () => {};

  const [parag, setParag] = useState([{id: v1(), text: "hello your first text"}]);

  const addParagraph = () => {
    console.log(value);

    setParag([...parag, {id: v1(), text: value}]);
    setValue("");
  };

  return (
    <div className="App">
      <div className="add-task-inner">
        <Input onChange={onChangeHandler} className="input-add" placeholder={"Add task"} value={value} />
        {/* <input type="text"  placeholder={"Add task"} onChange={onChangeHandler} /> */}
        <Button className={"add-task-btn"} title={"+"} onClick={addParagraph} />
      </div>
      {parag.map((p) => {
        return (
          <p>
            {p.id} - {p.text}
          </p>
        );
      })}
    </div>
  );
}

export default App;
