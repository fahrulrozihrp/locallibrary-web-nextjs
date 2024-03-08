import connectMongoDB from "@/app/libs/mongodb";
import BookInstance from "@/app/libs/models/bookinstance";
import Book from "@/app/libs/models/book";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const allBookInstances = await BookInstance.find().populate("book").exec();
    return NextResponse.json({ allBookInstances });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
