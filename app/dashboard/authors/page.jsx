// import { fetchAllAuthors } from "@/app/libs/data/authorsdata";
import Fetcher from "@/app/libs/data/fetcher";

export default async function Authors() {
  const data = await Fetcher("http://localhost:3000/api/authorapi");

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
            <div className="text-black text-xl">
              {item?.first_name} {item?.family_name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
