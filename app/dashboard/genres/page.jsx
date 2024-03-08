const getGenres = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/genreapi", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function Genres() {
  const data = await getGenres();

  if (!data?.allGenre) {
    return <p>No Books.</p>;
  }
  const allGenre = data?.allGenre;

  return (
    <div>
      <div className="text-4xl">Genre List</div>
      {allGenre?.map((item) => {
        return <div>{item?.name}</div>;
      })}
    </div>
  );
}
