import connectMongoDB from "@/app/libs/mongodb";
import Book from "@/app/libs/models/book";
import Author from "@/app/libs/models/author";
import Genre from "@/app/libs/models/genre";
import BookInstance from "@/app/libs/models/bookinstance";

export async function fetchGenre() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await connectMongoDB();
    const allGenre = await Genre.find().sort({ name: 1 }).exec();
    return allGenre;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch!");
  }
}

export async function fetchAuthor() {
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
  try {
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
