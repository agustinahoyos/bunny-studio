import React, {useState} from 'react';
import axios from 'axios';
import './css/UsersForm.css'

export default function UsersForm() {
    const [name, setName] = useState("");

    function createNewUser(e){   
    
      if (name === "") return alert("ERROR! Username is empty")
        axios.post(`http://localhost:3002/users`, {name: name} );
         setName("");
     }


return(

    <div className="formContainer" class="container"> 
        <form className="formContainer" onSubmit={(e)=> createNewUser(e)}> 
        <div class="form-group">
            <label>Create new user: </label>
            <div>
            <input  id="inputvalue" type="text" placeholder="username" value={name} onChange={(e) => setName(e.target.value) }/>
            <button class="btn btn-success" type="submit">Create</button>
            </div>
            </div>
        </form>
    </div>

    )
}