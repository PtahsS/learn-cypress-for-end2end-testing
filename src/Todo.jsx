import React from 'react';

const Todo = ({ todo, index, toggleTodo, handleDelete }) => {
  return (
    <li style={styles.listStyleTypeNone}>
      <input
        style={{ marginRight: "1rem" }}
        type="checkbox"
        checked={todo.checked}
        onChange={() =>  toggleTodo(index)}
        
      />
      <span style={todo.checked ? styles.lineThrough : null}>
        {todo.name}
      </span>
      <input
        style={{ marginLeft: "1rem" }}
        type="button"
        value="X"
        onClick={() => handleDelete(index)}
      />
    </li>
  )
}

const styles = {
  listStyleTypeNone: {
    listStyleType: "none"
  },
  lineThrough: {
    textDecoration: "line-through"
  },

}

export default Todo