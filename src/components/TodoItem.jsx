
function ToDoItem ({toDoItems})
{
    return <div className="to-do-container-tasks">
    {toDoItems.map((item , index) =>(
       <div className="row row-style" key={index}>
          <div className="col-6">
            <p>{item.text}</p>
          </div>

        <div className="col-4">
            <p>{item.date}</p>
        </div>

        <div className="col-2">
            <button type="button" className="btn btn-danger button-style">Delete</button>
        </div>

      </div>   
    )
    )}
   
    </div>
}
export default ToDoItem;