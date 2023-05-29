import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex h-screen justify-between px-24 place-items-start pt-64">
      <div className="flex-1 mt-8">
        <h1 className="text-9xl font-krifon text-ijo">Habitude</h1>
        <p className="text-5xl leading-snug w-[90%]">
          Empowering You to Forge Powerful Habits and Achieve Your Wildest
          Dreams!
        </p>
        <button className="border-black text-4xl font-bold text-ijo border-8 px-8 py-4 rounded-xl mt-8">
          Download
        </button>
      </div>
      <div className="">
        <Image src="/hero_image.svg" width={800} height={700} alt="hero" />
      </div>
    </main>
  );
};

export default Hero;
