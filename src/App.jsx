import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/TodoItem";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";

function App() {
let [toDoItems , setToDoItems] = useState([]);
 
 return (
<div className="container-flex">
    <div className="to-do-container">
        <AppName/>

        <AddToDo toDoItems={toDoItems}  setToDoItems={setToDoItems}></AddToDo>

        <ErrorMessage toDoItems={toDoItems}></ErrorMessage>

        <ToDoItem toDoItems={toDoItems} setToDoItems={setToDoItems}/>

    </div>
</div>
  )
}

export default App;
