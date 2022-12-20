import styles from '../style.module.css';
import shortid from 'shortid';

const Form = ({toDo, setToDo, toDoList, setToDoList})=> {
    const handleChange = (event)=> {        // Typying the input.
        setToDo(event.target.value);        // Set information.
    }

    const handleSubmit = (event) => {       // Submit form information.
        event.preventDefault();             // Don't reload the page.
        // Take all the items inside the list (spread operator) also, generate an id using shortid.
        setToDoList([...toDoList, {name: toDo, id: shortid.generate()}]);
        setToDo('');                        // Reset input field.
    }

    return (
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input value={toDo} onChange={handleChange} className={styles.todoInput} placeholder='add a task'></input>
                <button className={styles.todoButton} type='submit'>Add</button>
            </form>
        </div>
    );
}

export default Form;