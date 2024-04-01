// import { CardSkeleton } from "@/app/component/skeleton";
import { Loading } from "@/app/component/loading";
import { fetchGenre } from "@/app/libs/data";
import { Suspense } from "react";
// import { CardSkeleton } from "@/app/component/skeleton";

// const getGenres = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/genreapi", {
//       method: "GET",
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
export default async function Genres() {
  const allGenre = await fetchGenre();

  // if (!data?.allGenre) {
  //   return <p>No Books2.</p>;
  // }
  // // const allGenre = data?.allGenre;

  return (
    <div>
      <div className="text-4xl">Genre List</div>
      {allGenre.map((item) => {
        return (
          <div className="text-black text-xl" key={item._id}>
            <li>{item.name}</li>
          </div>
        );
      })}
    </div>
  );
}
