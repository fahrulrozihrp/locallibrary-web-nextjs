import { fetchDetails } from "@/app/libs/data";
import { Loading } from "../../component/loading";
import { Suspense } from "react";

export default async function Page() {
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await fetchDetails();
  return (
    <div className=" text-black ">
      <h1 className="text-4xl">Local Library Home</h1>
      <p>
        Welcome to Local Library, A website inspired by{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
          target="_blank"
          className="text-blue-500"
        >
          MDN Tutorials
        </a>{" "}
        rewritten with nextjs.
      </p>
      <h1 className="pt-5 text-4xl">Dynamic Content</h1>
      <p>The library has the following record count:</p>
      <br />
      <Suspense fallback={<Loading />}>
        <li>{`Books: ${numBooks}`}</li>
        <li>{`Copies: ${numBookInstances}`}</li>
        <li>{`Copies available: ${numAvailableBookInstances}`}</li>
        <li>{`Authors: ${numAuthors}`}</li>
        <li>{`Genres: ${numGenres}`}</li>
      </Suspense>
    </div>
  );
}
