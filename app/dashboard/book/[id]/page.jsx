import { fetchBook, fetchBookId } from "@/app/libs/data";
import Link from "next/link";

const SingleBookPage = async ({ params }) => {
  const { id } = params;
  const [book, bookInstances] = await fetchBookId(id);

  return (
    <div>
      <div>Title: {book.title} </div>
      <div>
        Author:{" "}
        <Link href={book.author.url} className="text-blue-500">
          {book.author.name}
        </Link>{" "}
      </div>
      <div>Summary: {book.summary} </div>
      <div>ISBN: {book.isbn} </div>
      {/* <div>Genre: {book.genre} </div> */}
    </div>
  );
};

export default SingleBookPage;
