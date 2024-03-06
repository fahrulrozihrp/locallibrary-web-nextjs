"use client";
export default function GenreCreate() {
  return (
    <div>
      <div className="text-4xl mb-5">Create Genre</div>
      <form action="">
        <label htmlFor="genre_name">Genre:</label>
        <br />
        <input
          type="text"
          id="genre_name"
          placeholder="Fantasy, Poetry etc."
          className="p-2 mt-2 mb-5 border border-gray-500 w-[100%] md:w-[100%]"
        />

        <button
          type="submit"
          className="bg-blue-500 py-2 px-4 text-xl rounded-[5px] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
