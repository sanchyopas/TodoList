import {ChangeEvent, useState} from "react";
import {v1} from "uuid";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {spawn} from "child_process";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodolistPropsType = {
  title: string;
  tasks: Array<TaskType>;
};

export const Todolist = ({tasks, title}: TodolistPropsType) => {
  // state input add task
  const [value, setValue] = useState("");

  // changed state input value
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const tasksElements: Array<JSX.Element> | JSX.Element =
    tasks.length !== 0 ? (
      tasks.map((task) => {
        return (
          <div className={task.isDone ? "todolist__task is-done" : "todolist__task"}>
            <input type="checkbox" className={"input-checkbox"} checked={task.isDone} />
            <span className={"todolist__task-name"}>{task.title}</span>
            <Button title={""} className={"close button-close"} />
          </div>
        );
      })
    ) : (
      <span>asdasdasd</span>
    );

  return (
    <div className="todolist__item">
      <Button title="" className={"close remove-todolist"} />
      <h3 className="todolist__item-title">{title}</h3>
      <div className="add-task-inner">
        <Input onChange={onChangeHandler} className="input-add" placeholder={"Add task"} value={value} />
        <Button className={"add-task-btn"} title={"+"} onClick={() => {}} />
      </div>
      <div className="todolist__list">{tasksElements}</div>
    </div>
  );
};
