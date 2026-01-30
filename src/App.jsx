import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/TodoItem";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";

function App() {
const [toDoItems , setToDoItems] = useState([{text : "Buy Milk"  , date :"04/10/2026"  }, {text:"Go to College" , date : "05/10/2026"} , {text:"Buy Books" , date: "07/10/2026"}]);
 
 return (
<div className="container-flex">
    <div className="to-do-container">
        <AppName/>

        <AddToDo toDoItems={toDoItems}  setToDoItems={setToDoItems}></AddToDo>

        <ErrorMessage toDoItems={toDoItems}></ErrorMessage>

        <ToDoItem toDoItems={toDoItems}/>

    </div>
</div>
  )
}

export default App;
