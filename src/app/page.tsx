import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Todo App</h1>
      <div className="w-full max-w-md">
        <TodoInput />
        <TodoList />
      </div>
    </main>
  );
}
