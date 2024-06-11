import { useTodoStore } from './store/useStore';

const TodoList = () => {
    const { todos, toggleTodo} = useTodoStore()
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {
                    Object.values(todos).map((todo) => (
                        <li key={todo.id}>
                            <label style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
                        <input type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(todo.id)}

                        />
                        {todo.title}
                            </label>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default TodoList;