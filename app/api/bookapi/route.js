import connectMongoDB from "../../libs/mongodb";
import Book from "../../libs/models/book";
import Author from "@/app/libs/models/author";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const books = await Book.find({}, "title author")
      .sort({ title: 1 })
      .populate("author")
      .exec();
    return NextResponse.json({ books });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// export async function POST() {}
