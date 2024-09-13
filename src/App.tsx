import {ChangeEvent, useState} from "react";
import "./App.css";
import {Button} from "./components/Button/Button";

function App() {
  const [value, setValue] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className="App">
      <div className="add-task-inner">
        <input type="text" className="input-add" placeholder={"Add task"} onChange={onChangeHandler} />
        <Button className={"add-task-btn"} title={"+"} />
      </div>
      <p>{value}</p>
    </div>
  );
}

export default App;
