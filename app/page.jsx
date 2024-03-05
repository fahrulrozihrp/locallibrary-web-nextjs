import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen text-black text-4xl">
        Login <br />
        <Link href="/dashboard" className="flex text-blue-900">
          masuk ke dashboard
        </Link>
      </div>
    </main>
  );
}
