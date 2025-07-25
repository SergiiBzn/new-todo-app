const ToDoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className='flex justify-between items-center mb-2'>
      <label className='flex items-center'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className='mr-2'
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => deleteTodo(todo.id)} className='cursor-pointer'>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
