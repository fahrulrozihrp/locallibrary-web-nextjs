// import { fetchAllBook } from "@/app/libs/data/bookdata";
import { fetchBook } from "@/app/libs/data";
import Link from "next/link";

export default async function Books() {
  // const data = await fetchAllBook();

  // if (!data?.books) {
  //   return <p>No Books.</p>;
  // }

  // const book = data.books;
  const books = await fetchBook();
  return (
    <div>
      <div className="text-4xl">All Books List</div>
      {books.map((item) => {
        return (
          <div className=" text-xl text-blue-500" key={item._id}>
            <Link href={`/dashboard/book/${item._id}`}>
              <li>{item.title}</li>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
