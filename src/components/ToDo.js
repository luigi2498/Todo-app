import styles from '../style.module.css';

const ToDo = ({toDoItem, setToDoList, toDoList}) =>{   // Destructuring props.
    const handleDelete = ()=> {
        setToDoList(toDoList.filter(item => item.id !== toDoItem.id));
    }

    return (
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>{toDoItem.name}</h3>
                <button onClick={handleDelete} className={styles.deleteButton}>Done</button>
            </div>
        </div>
    );
}

export default ToDo;