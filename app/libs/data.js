import connectMongoDB from "@/app/libs/mongodb";
import Book from "@/app/libs/models/book";
import Author from "@/app/libs/models/author";
import Genre from "@/app/libs/models/genre";
import BookInstance from "@/app/libs/models/bookinstance";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchGenre() {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    await connectMongoDB();
    const allGenre = await Genre.find().sort({ name: 1 }).exec();
    return allGenre;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchAuthor() {
  noStore();
  try {
    await connectMongoDB();
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
    return allAuthors;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchBook() {
  noStore();
  try {
    await connectMongoDB();
    const books = await Book.find({}, "title author")
      .sort({ title: 1 })
      .populate("author")
      .exec();
    return books;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchBookInstance() {
  noStore();
  try {
    await connectMongoDB();
    const allBookInstances = await BookInstance.find().populate("book").exec();
    return allBookInstances;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchDetails() {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    await connectMongoDB();
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
    return [
      numBooks,
      numBookInstances,
      numAvailableBookInstances,
      numAuthors,
      numGenres,
    ];
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchBookId(id) {
  try {
    await connectMongoDB();
    const [book, bookInstances] = await Promise.all([
      Book.findById(id).populate("author").populate("genre").exec(),
      BookInstance.find({ book: id }).exec(),
    ]);
    return [book, bookInstances];
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchAuthorId(id) {
  try {
    await connectMongoDB();
    const [author, allBooksByAuthor] = await Promise.all([
      Author.findById(id).exec(),
      Book.find({ author: id }, "title summary").exec(),
    ]);
    return [author, allBooksByAuthor];
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}
