import React, { useState } from "react";
import axios from "axios";

export default function TasksForm({ userid }) {
  const [newTask, setNewTask] = useState("");
  const [newState, setNewState] = useState("to do");

  function createNewTask(e) {
    e.preventDefault();
    if (newTask === "") return alert("ERROR! Description is empty");
    axios.post(`http://localhost:3002/tasks`, {
      userid: e.target.name,
      description: newTask,
      state: newState,
    });
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleStateSelect(e) {
    e.preventDefault();
    return setNewState(e.target.value);
  }

  return (
    <div class="container">
      <h4>Add New Tasks</h4>
      <form name={userid} onSubmit={(e) => createNewTask(e)}>
        <div class="form-group">
          <label>Description </label>
          <input
            id="inputvalue"
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <div class="form-group">
            <label>Select state</label>
            <select
              name="select"
              onClick={(e) => handleStateSelect(e)}
              class="form-control"
            >
              <option type="input">to do</option>
              <option type="input">done</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Add New Task
          </button>
        </div>
      </form>
    </div>
  );
}
