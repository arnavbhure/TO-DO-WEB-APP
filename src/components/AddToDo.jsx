import { useState } from "react";

function AddToDo ({toDoItems , setToDoItems})
{

let [toDoInput , setToDoInput] = useState("");
let [toDoDate , setToDoDate] = useState("");

const handleOnToDoChange = (tempToDoInput) =>{
  setToDoInput(tempToDoInput);
}

const handleOnDateChange = (tempToDoDate) =>{
  setToDoDate(tempToDoDate);
}

const handleOnClickAdd = () =>{
  setToDoItems((prevItems) => [...prevItems , {text : toDoInput, date : toDoDate}]);
  setToDoDate("");
  setToDoInput("");
}

    return <div className="row row-style">
          <div className="col-6">
            <input className="text-input" type="text" placeholder="Enter To Do here" value={toDoInput} onChange={(e) => handleOnToDoChange(e.target.value)}/>
          </div>
          <div className="col-4">
            <input type="date" value={toDoDate} onChange={(e) => handleOnDateChange(e.target.value)}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success button-style" onClick={() => handleOnClickAdd()}>Add</button>
          </div>
        </div>
}

export default AddToDo;