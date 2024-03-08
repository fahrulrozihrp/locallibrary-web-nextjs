import connectMongoDB from "../../libs/mongodb";
import Book from "../../libs/models/book";
import Author from "@/app/libs/models/author";
import Genre from "@/app/libs/models/genre";
import BookInstance from "@/app/libs/models/bookinstance";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const [
      numBooks,
      numBookInstances,
      numAvailableBookInstances,
      numAuthors,
      numGenres,
    ] = await Promise.all([
      Book.countDocuments({}).exec(),
      BookInstance.countDocuments({}).exec(),
      BookInstance.countDocuments({ status: "Available" }).exec(),
      Author.countDocuments({}).exec(),
      Genre.countDocuments({}).exec(),
    ]);
    return NextResponse.json([
      numBooks,
      numBookInstances,
      numAvailableBookInstances,
      numAuthors,
      numGenres,
    ]);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
