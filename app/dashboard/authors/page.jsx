import { fetchAllAuthors } from "@/app/libs/data/authorsdata";

export default async function Authors() {
  const data = await fetchAllAuthors();

  if (!data?.allAuthors) {
    return <p>No Authors.</p>;
  }

  const authors = data.allAuthors;

  return (
    <div>
      <div className="text-4xl">All Authors List</div>
      {authors?.map((item) => {
        return (
          <div key={item._id}>
            <div className="text-black text-xl">{item?.first_name}</div>
          </div>
        );
      })}
    </div>
  );
}
