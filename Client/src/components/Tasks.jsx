import React from 'react';
import axios from 'axios';
import './css/Tasks.css';

export default function Tasks ({taskid, description, state, userid}) {

    function deleteTask(e){
      
        axios.delete(`http://localhost:3002/tasks/${taskid}`);     
    }
function changeState(e){
    if (state ==="to do") state = "done";
    if (state ==="done") state = "to do";
    axios.put(`http://localhost:3002/tasks/${taskid}`, {description: description, userid:userid, state:state})
}

    return (

        <div>

          <div class="card" className="cardContainer">
             <div class="card-body" >
               <h5 class="card-title">{description}</h5>
                <h6 class="card-subtitle mb-2 text-muted">State: {state}</h6>
                <button onClick={(e)=> changeState(e)}>Change state</button>
                <h6 class="card-subtitle mb-2 text-muted">User ID: {userid}</h6>
                  <button  name={taskid} onClick={(e)=> deleteTask(e)}> Delete</button>            
             </div>
         </div>
        </div>
    )

}

// <form onSubmit={(e)=> createNewTask(e)}> 
//   onClick={(e)=>task.deleteTask(e)
//  <button type="submit">Create</button>
// <label>Create new task: </label>
// <input  id="inputvalue" type="text"  value={newTask} onChange={(e) => setNewTask(e.target.value) }/>
// <input  id="inputvalue" type="text"  value={newTask} onChange={(e) => setNewTask(e.target.value) }/>


//</form> 

    // function deleteTask (e){
    //   e.preventDefault();
    //     var id= e.target.name;
      
    //     axios.delete(`http://localhost:3002/tasks/${id}`);
 

    // }
