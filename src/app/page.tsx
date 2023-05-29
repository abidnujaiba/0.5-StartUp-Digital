import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-screen bg-krem grid place-content-center">
      <Navbar />
      <Hero />
    </section>
  );
}
