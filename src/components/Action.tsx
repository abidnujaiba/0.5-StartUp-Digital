import Image from "next/image";

const Action = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-9 h-screen">
      <div>
        <h1 className="text-center font-bold text-6xl">Habitute in Action</h1>
        <h2 className="text-[28px]">
          Discover the Life-Changing Impact of Habitude on Your Habits
        </h2>
      </div>
      <div className="relative group">
        <svg
          width="102"
          height="118"
          viewBox="0 0 102 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute m-auto top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 transition duration-500"
        >
          <path
            d="M0.0815397 0.391569L101.969 57.7299L1.3689 117.298L0.0815397 0.391569Z"
            fill="#FFFCFC"
          />
        </svg>
        <div className="w-full h-full absolute rounded-lg bg-black/40 group-hover:bg-transparent transition duration-500"></div>

        <Image
          src="/actions.png"
          width={1200}
          height={1000}
          className="aspect-video"
          alt="action"
        />
      </div>
    </div>
  );
};

export default Action;
