import Todo from "./Todo";

const TodoList = ({ arr, toggleTodo, handleDelete }) => {
    console.log("arr", arr);
    return (
        <ul>
            {arr.map((todo, index) => <Todo
                todo={todo}
                key={index}
                index={index}
                toggleTodo={toggleTodo}
                handleDelete={handleDelete}
            />)}
        </ul>
    )
}

export default TodoList;