import { fetchAllBook } from "@/app/libs/data/bookdata";

export default async function Books() {
  const data = await fetchAllBook();

  if (!data?.books) {
    return <p>No Books.</p>;
  }

  const book = data.books;

  return (
    <div>
      <div className="text-4xl">All Books List</div>
      {book?.map((item) => {
        return (
          <div key={item._id}>
            <div className="text-black text-xl">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
