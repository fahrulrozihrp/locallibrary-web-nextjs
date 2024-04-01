import { fetchAuthorId } from "@/app/libs/data";

const SingleAuthorPage = async ({ params }) => {
  const { id } = params;
  const [author, allBooksByAuthor] = await fetchAuthorId(id);
  return <div>Not Implemented</div>;
};

export default SingleAuthorPage;
