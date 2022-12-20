import ToDo from './ToDo';

const ToDoList = ({setToDoList, toDoList}) =>{   // Destructuring props.
    return (
        <div>
            {toDoList.map((toDoItem) =>(
                <ToDo 
                    key = {toDoItem.id}
                    toDoItem = {toDoItem}
                    setToDoList = {setToDoList}
                    toDoList = {toDoList}
                />
            ))}
        </div>
    );
}

export default ToDoList;