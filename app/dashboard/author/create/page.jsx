"use client";
export default function AuthorCreate() {
  return (
    <div>
      <div className="text-4xl mb-5">Create Author</div>
      <form action="">
        <label htmlFor="first_name">First Name:</label>
        <br />
        <input
          type="text"
          id="first_name"
          placeholder="First Name"
          className="p-2 mt-2 mb-5 border border-gray-500 w-[100%] md:w-[100%]"
        />
        <label htmlFor="family_name">Family Name:</label>
        <br />
        <input
          type="text"
          id="family_name"
          placeholder="Family Name"
          className="p-2 border mt-2 mb-5 border-gray-500 w-[100%] md:w-[100%]"
        />
        <label htmlFor="date_of_birth">Date of Birth:</label>
        <br />
        <input
          type="date"
          id="date_of_birth"
          className="p-2 border mt-2 mb-5 border-gray-500 w-[100%] md:w-[100%]"
        />

        <label htmlFor="date_of_death">Family Name:</label>
        <br />
        <input
          type="date"
          id="date_of_death"
          className="p-2 border mt-2 mb-5 border-gray-500 w-[100%] md:w-[100%]"
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
