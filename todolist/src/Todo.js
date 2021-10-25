function Todo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo}
            className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo)}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo)}>
                X
            </div>
        </div>
    )
}
export default Todo
