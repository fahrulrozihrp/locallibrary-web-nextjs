import { fetchBookInstance } from "@/app/libs/data";

export default async function Bookinstances() {
  const allBookInstances = await fetchBookInstance();
  return (
    <div>
      <div className="text-4xl">Book Instance List</div>
      {allBookInstances.map((item) => {
        return (
          <div key={item._id}>
            <li>
              {item.book.title} : {item.imprint} -&nbsp;
              {item.status === "Available" && (
                <span className="text-[#5cb85c]">{item.status}</span>
              )}
              {item.status === "Maintenance" && (
                <span className="text-[#d9534f]">{item.status}</span>
              )}
              {item.status !== "Available" && item.status !== "Maintenance" && (
                <span className="text-[#f0ad4e]">{item.status}</span>
              )}
              {item.status !== "Available" && (
                <span>(Due: {item.due_back_formatted})</span>
              )}
            </li>
          </div>
        );
      })}
    </div>
  );
}
