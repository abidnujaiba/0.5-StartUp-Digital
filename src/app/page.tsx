import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-orange-400 grid place-content-center">
      <Navbar />
      <h1 className="font-krifon">hebitut</h1>
    </main>
  );
}
