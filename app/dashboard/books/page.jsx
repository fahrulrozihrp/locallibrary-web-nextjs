// import { fetchAllBook } from "@/app/libs/data/bookdata";
import { fetchBook } from "@/app/libs/data";

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
          <div key={item._id}>
            <div className="text-black text-xl">
              <li>{item.title}</li>
            </div>
          </div>
        );
      })}
    </div>
  );
}
