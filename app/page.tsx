import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-2xl">Hello</p>
      <Link href="/register">Register</Link>
      <br />
      <Link href="/login">Login</Link>
    </main>
  );
}
