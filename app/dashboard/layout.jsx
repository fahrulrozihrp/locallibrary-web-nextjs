import Sidenav from "../component/dashboard/sidenav";
import { Bars2Icon } from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Sidenav />
        </div>

        <div className="flex-grow px-4 pt-20 md:overflow-y-auto md:pt-6">
          {children}
        </div>
      </main>
    </>
  );
}
