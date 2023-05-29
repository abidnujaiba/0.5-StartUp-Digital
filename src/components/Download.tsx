const Download = () => {
  return (
    <div className="h-screen flex flex-col justify-end relative overflow-hidden">
      <div className="relative flex overflow-hidden h-3/4">
        <div className="bg-ijo absolute left-1/2 z-0 -translate-x-1/2 rounded-t-[50%] w-[150rem] h-[80rem]"></div>
        <div className="flex mt-32 z-10 flex-col gap-16 justify-center items-center">
          <h1 className="text-krem font-bold text-6xl w-7/12 text-center">
            Ready to take control of your habits and unlock your true potential?
          </h1>
          <button className="bg-krem text-ijo font-bold text-4xl rounded-xl px-10 py-6">
            Download Habitude
          </button>
          <p className="text-krem text-[28px]">
            Invest in yourself, invest in your future. Let's make every day
            count!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
