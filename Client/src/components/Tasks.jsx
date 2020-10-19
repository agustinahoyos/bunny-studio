import React from "react";
import axios from "axios";
import "./css/Tasks.css";

export default function Tasks({ taskid, description, state, userid }) {
  function deleteTask(e) {
    axios.delete(`http://localhost:3002/tasks/${taskid}`);
  }

  function changeState(e) {
    if (state === "to do") state = "done";
    if (state === "done") state = "to do";
    axios.put(`http://localhost:3002/tasks/${taskid}`, {
      description: description,
      userid: userid,
      state: state,
    });
  }

  return (
    <div>
      <div class="card" className="cardContainer">
        <div class="card-body">
          <h5 class="card-title">{description}</h5>
          <h6 class="card-subtitle mb-2 text-muted">State: {state}</h6>
          <button onClick={(e) => changeState(e)}>Change state</button>
          <h6 class="card-subtitle mb-2 text-muted">User ID: {userid}</h6>
          <button name={taskid} onClick={(e) => deleteTask(e)}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
