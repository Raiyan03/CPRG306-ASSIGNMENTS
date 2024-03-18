import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-24 bg-black text-white">
        <h1 className="text-3xl">CPRG 306: Web Development 2- Assignments</h1>
        <Link href="week-2"><p className="text-xl mt-3" >Week 2</p></Link>
        <Link href="week-3"><p className="text-xl mt-3" >Week 3</p></Link>
        <Link href="week-4"><p className="text-xl mt-3" >Week 4</p></Link>
        <Link href="week-5"><p className="text-xl mt-3" >Week 5</p></Link>
        <Link href="week-6"><p className="text-xl mt-3" >Week 6</p></Link>
        <Link href="week-7"><p className="text-xl mt-3" >Week 7</p></Link>
        <Link href="week-8"><p className="text-xl mt-3" >Week 8</p></Link>
    </main>
  );
}
