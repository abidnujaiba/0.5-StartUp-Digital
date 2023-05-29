import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-9 left-1/2 z-50 -translate-x-1/2 bg-ijo flex justify-between w-[95vw] rounded-xl px-12 py-6 shadow-2xl">
      <div className="flex">
        <button>
          <Image src="/logo_setengah.svg" width={71} height={64} alt="logo" />
        </button>
      </div>
      <div className="flex text-white text-2xl gap-x-14 mr-5">
        <button className="uppercase">Contact Us</button>
        <button className="border-2 uppercase rounded-lg py-3 px-7">
          Get Habitude For Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
