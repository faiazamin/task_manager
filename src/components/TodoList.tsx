import { getTodos, deleteTodo } from '@/app/actions';

export async function TodoList() {
  const todos = await getTodos();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm"
        >
          <span>{todo.text}</span>
          <button
            onClick={async () => {
              'use server';
              await deleteTodo(todo.id);
            }}
            className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
