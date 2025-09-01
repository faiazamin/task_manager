
import { addTodo } from '@/app/actions';

export function TodoInput() {
  return (
    <form action={addTodo} className="flex gap-2 mb-4">
      <input
        type="text"
        name="text"
        placeholder="Add a new todo"
        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}
