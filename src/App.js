import Header from "./components/Header";
import Form from './components/Form';
import ToDoList from "./components/ToDoList";
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');           // To do task.
  const [toDoList, setToDoList] = useState([]);   // To do list.

  return (
    <div className="App">
      <Header />
      <Form toDo = {toDo} setToDo = {setToDo} toDoList = {toDoList} setToDoList = {setToDoList}/>
      <ToDoList setToDoList = {setToDoList} toDoList = {toDoList}/>
    </div>
  );
}

export default App;