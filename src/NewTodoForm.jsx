const NewTodoForm = ({ value, updateText, handleAction }) => {
    return (
        <label>
            <input
                type="text"
                placeholder="new todo"
                value={value}
                onChange={(e) => updateText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        handleAction();
                    }
                }
                }

            />
            <button onClick={handleAction}>Add todo</button>
        </label>
    )
}

export default NewTodoForm;