import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

// GET
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();
  return NextResponse.json(todos);
}

// DELETE
export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json({ messaga: "To do id is required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted` });
}

// POST
export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title)
    return NextResponse.json({ messaga: "Missing required" });

  const res = await fetch(`${DATA_SOURCE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await res.json();
  return NextResponse.json(newTodo);
}

// PUT
export async function PUT(request: Request) {
  const { userId, title, id, completed }: Todo = await request.json();
  if (!userId || !title || !id || typeof completed !== "boolean")
    return NextResponse.json({ messaga: "Missing required" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed
    }),
  });

  const updatedTodo: Todo = await res.json();
  return NextResponse.json(updatedTodo);
}
