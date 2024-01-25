import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-24">
        <h1 class="text-3xl">CPRG 306: Web Development 2- Assignments</h1>
        <Link href="week-2"><p className="text-xl mt-3" >Week 2</p></Link>
    </main>
  );
}
