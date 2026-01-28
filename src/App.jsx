import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/TodoItem";
import "./App.css";
import ErrorMessage from "./ErrorMessage";

 let todoitems = [{text : "Buy Milk"  , date :"04/10/2026"  }, {text:"Go to College" , date : "05/10/2026"} , {text:"Buy Books" , date: "07/10/2026"}];

function App() {
  return (
    <div className="to-do-container">
        <AppName/>
       
        <AddToDo items={todoitems}></AddToDo>

        <ErrorMessage items={todoitems}></ErrorMessage>

        <ToDoItem items={todoitems}/>

    </div>
  )
}

export default App;
