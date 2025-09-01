"use server";

import { db } from '@/db';
import { todos } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function addTodo(formData: FormData) {
  const text = formData.get('text') as string;
  if (text) {
    await db.insert(todos).values({ text });
    revalidatePath('/');
  }
}

export async function getTodos() {
  return await db.select().from(todos).all();
}

export async function deleteTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath('/');
}
