import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const menuRead = [
  { name: "Home", link: "/dashboard", index: "home" },
  { name: "All Books", link: "/dashboard/books", index: "books" },
  { name: "All Authors", link: "/dashboard/authors", index: "authors" },
  { name: "All Genres", link: "/dashboard/genres", index: "genres" },
  {
    name: "All Book-Instances",
    link: "/dashboard/booksinstances",
    index: "booksinstances",
  },
];

const menuCreate = [
  {
    name: "Create New Author",
    link: "/dashboard/author/create",
    index: "author",
  },
  { name: "Create New Genre", link: "/dashboard/genre/create", index: "genre" },
  { name: "Create New Book", link: "/dashboard/book/create", index: "book" },
  {
    name: "Create New Book-Instance",
    link: "/dashboard/bookinstance/create",
    index: "bookinstance",
  },
];

export default function NavbarLink() {
  return (
    <>
      <div>
        {menuRead.map((item) => (
          <div key={item.index}>
            <Link href={item.link} className=" text-blue-600">
              <p className="flex bg-sky-100 rounded-lg my-1 px-2 py-2 font-medium">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {menuCreate.map((item) => (
          <div key={item.index}>
            <Link href={item.link} className="text-[#287228]">
              <p className="flex bg-sky-100  rounded-lg my-1 px-2 py-2 font-medium">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
