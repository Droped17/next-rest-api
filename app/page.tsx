"use client";

import { useState, useEffect } from "react";
import { GET } from "../app/api/todos/route";
import Todo from "./components/Todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await GET();
        if (response.ok) {
          const todosData: Todo[] = await response.json();
          setTodos(todosData);
        } else {
          console.error("Failed to fetch todos:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodo();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800 text-white">
      <h1>All Todos</h1>
      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </div>
    </main>
  );
}
