"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-krem grid place-content-center">
      <Navbar />
      <Hero />
      <HowItWorks />
    </section>
  );
}
