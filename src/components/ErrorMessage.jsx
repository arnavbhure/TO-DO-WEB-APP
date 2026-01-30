
function ErrorMessage({toDoItems})
{
    if(!toDoItems || toDoItems.length===0)
    return (
     <p className="error-message">Relax !! To Do List is empty !</p>    
    );
    return null;
}

export default ErrorMessage;