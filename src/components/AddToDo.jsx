import { useState } from "react";

function AddToDo ({toDoItems , setToDoItems})
{

const [tempToDo , setTempToDO] = useState("");

const enteredToDoItem = (enteredToDo , e) =>{

    if(e.key==="Enter")
    {
      console.log(enteredToDo);
    }
}

const dateInput = (dateinput) =>{
  console.log(dateinput);
}

    return <div className="row row-style">
          <div className="col-6">
            <input type="text" placeholder="Enter To Do here" onKeyDown={(e) => enteredToDoItem(e.target.value , e)}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={(e) => dateInput(e.target.value)} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success button-style">Add</button>
          </div>
        </div>
}

export default AddToDo;