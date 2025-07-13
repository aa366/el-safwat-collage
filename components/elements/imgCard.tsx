import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  link?: string;
  img: string;
  text?: string;
  imgClass?: string;
  contClass?: string;
  textContClass?: string;
}

const Card = ({
  link,
  img,
  text,
  imgClass,
  contClass,
  textContClass,
}: Props) => {
  return (
    <div className={`relative ${contClass}`}>
      {link ? (
        <Link href={link ? link : "/"}>
          <Image
            alt="img"
            src={img ? img : "/default.webP"}
            width={100}
            height={100}
            className={`w-full ${imgClass}`}
          />
        </Link>
      ) : (
        <Image
          alt="img"
          src={img ? img : "/default.webP"}
          width={100}
          height={100}
          className={`w-full ${imgClass}`}
        />
      )}

      <div
        className={`absolute bottom-0 w-full bg-[rgba(0,0,0,.5)] text-white font-medium  text-center text-xl py-1 ${
          !text && "hidden"
        } ${textContClass}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
