import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// GET
export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todos: Todo = await res.json();
  if (!todos.id) return NextResponse.json({ message: "todo not found" });

  return NextResponse.json(todos);
}


