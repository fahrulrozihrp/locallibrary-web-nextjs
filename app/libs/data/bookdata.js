export async function fetchAllBook() {
  try {
    const res = await fetch("http://localhost:3000/api/bookapi", {
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
}
