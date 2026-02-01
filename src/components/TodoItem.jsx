
function ToDoItem ({toDoItems , setToDoItems})
{

  const handleonDelete = (indexToDelete) => {
    let newItems = toDoItems.filter((__ , index) => index !== indexToDelete);
    setToDoItems(newItems);
  }

    return <div className="to-do-container-tasks">
    {toDoItems.map((item , index) =>(
       <div className="row row-style" key={index}>
          <div className="col-6">
            <p className="display-output">{item.text}</p>
          </div>

        <div className="col-4">
            <p className="display-output">{item.date}</p>
        </div>

        <div className="col-2">
            <button type="button" className="btn btn-danger button-style" onClick={() => handleonDelete(index)}>Delete</button>
        </div>

      </div>   
    )
    )}
   
    </div>
}
export default ToDoItem;