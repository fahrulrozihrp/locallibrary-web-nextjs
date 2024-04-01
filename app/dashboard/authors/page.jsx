// import { fetchAllAuthors } from "@/app/libs/data/authorsdata";
import Fetcher from "@/app/libs/data/fetcher";
import { fetchAuthor } from "@/app/libs/data";
import Link from "next/link";

export default async function Authors() {
  //   const data = await Fetcher("http://localhost:3000/api/authorapi");

  //   if (!data?.allAuthors) {
  //     return <p>No Authors.</p>;
  //   }

  //   const authors = data.allAuthors;

  const allAuthors = await fetchAuthor();
  return (
    <div>
      <div className="text-4xl">All Authors List</div>
      {allAuthors.map((item) => {
        return (
          <div key={item._id}>
            <div className="text-blue-500 text-xl">
              <Link href={`/dashboard/author/${item._id}`}>
                <li>
                  {item.first_name} {item.family_name}
                </li>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
