import React, { useState } from 'react'
import NewTodoForm from "./NewTodoForm";
import TodoList from './TodoList';

function App() {
  const [value, setValue] = useState('');
  const [arr, setArr] = useState([
    // {
    //   name: "React",
    //   checked: false
    // },
    // {
    //   name: "Javascript",
    //   checked: false
    // },
    // {
    //   name: "CSS",
    //   checked: true
    // }
  ]);

  const updateValue = (newValue) => setValue(newValue);

  const updateArr = (e) => {
    setArr([{ name: value, checked: false }, ...arr ]);
    setValue('');
  }

  const toggleTodo = (index) => {
    setArr(() => {
      const newArr = [...arr];
      newArr[index] = {
        name: newArr[index].name,
        checked: !arr[index].checked
      };
      return newArr;
    })
  }

  const deleteTodo = index => {
    setArr(() => {
      const newArr = [...arr];
      newArr.splice(index, 1);
      return newArr;
    })
  }



  return (
      <div className="App">
        <NewTodoForm value={value} updateText={updateValue} handleAction={updateArr} />
        <TodoList arr={arr} toggleTodo={toggleTodo} handleDelete={deleteTodo} />
      </div>

  );
}

export default App;
