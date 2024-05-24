import React from "react";
// import meme from "/meme.mp4";
const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4 space-y-16 md:p-32 md:space-y-16 bg-[#00AFF0]">
      <h1 className="text-4xl md:text-6xl text-[#27272B] font-semibold text-center">
        HAHA ! <br className="md:hidden" /> Caught you lacking .
      </h1>
      <video src={"meme.mp4"} autoPlay loop className="rounded-xl" />
    </div>
  );
};

export default Page;
