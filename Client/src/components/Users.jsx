import React, { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./Tasks";
import TasksForm from "./Tasksform";
import "./css/Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      let res = await axios.get(`http://localhost:3002/tasks`);
      setTasks(res.data);
    }
    fetchTasks();
  }, [tasks]);

  useEffect(() => {
    async function fetchUsers() {
      let res = await axios.get(`http://localhost:3002/users`);
      setUsers(res.data);
    }
    fetchUsers();
  }, [deleteUser]);

  function deleteUser(e) {
    e.preventDefault();
    var id = e.target.name;
    axios.delete(`http://localhost:3002/tasks/user/${id}`);
    axios.delete(`http://localhost:3002/users/${id}`);
  }

  function filterTasks(tasks, userid) {
    const result = tasks.filter((task) => task.userid === userid);
    return result;
  }

  function editUser(e) {
    e.preventDefault();
    axios.put(`http://localhost:3002/users/${e.target.id}`, {
      name: editedName,
    });
  }

  function nameChanger(e) {
    e.preventDefault();
    return setEditedName(e.target.value);
  }

  return (
    <div className="hero">
      {users &&
        users.map((user) => (
          <div class="card" className="cualq" key={user.id}>
            <div class="card-body" className="card-container">
              <h2 class="card-title" key={user.id}>
                {user.name}
              </h2>

              <div>
                <form
                  id={user.id}
                  name={user.name}
                  onSubmit={(e) => editUser(e)}
                >
                  <button type="submit" class="btn btn-warning">
                    {" "}
                    Edit username:{" "}
                    <input onChange={(e) => nameChanger(e)} type="text" />
                  </button>
                </form>
              </div>
              <button
                type="button"
                class="btn btn-danger"
                name={user.id}
                onClick={(e) => deleteUser(e)}
              >
                {" "}
                Delete user
              </button>
              <div className="tasksContainer">
                {filterTasks(tasks, user.id).map((task) => (
                  <Tasks
                    taskid={task.taskid}
                    description={task.description}
                    state={task.state}
                    userid={task.userid}
                  />
                ))}{" "}
              </div>
              <div>
                <TasksForm userid={user.id} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
