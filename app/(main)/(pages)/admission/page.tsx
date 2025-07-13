import React from "react";
import Image from "next/image";
import Programs from "./private-component/programs";
import Benefits from "./private-component/benefits";

const Page = () => {
  const tsrc = "/toWEBP/admission-banner-2.webp";
  const bsrc = "/toWEBP/admission-head.webp";
  return (
    <main className="flex flex-col gap-[10vh]">
      <Image
        alt=""
        src={tsrc}
        width={100}
        height={100}
        className="w-full md:mx-auto md:w-10/12 min-h-[200px] "
        unoptimized={true}
      />
      <Programs />
      <Benefits />
      <Image
        alt=""
        src={bsrc}
        width={100}
        height={100}
        className="w-full"
        unoptimized={true}
      />
    </main>
  );
};

export default Page;
