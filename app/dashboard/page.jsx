export default function Page() {
  return (
    <div className=" text-black ">
      <h1 className="text-4xl">Local Library Home</h1>
      <p>
        Welcome to Local Library, A website inspired by{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
          className="text-blue-500"
        >
          MDN Tutorials
        </a>{" "}
        rewritten with nextjs.
      </p>
      <h1 className="pt-5 text-4xl">Dynamic Content</h1>
      <p>The library has the following record count:</p>
    </div>
  );
}
