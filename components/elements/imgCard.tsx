import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    <div className={cn(`relative `,contClass)}>
      {link ? (
        <Link href={link ? link : "/"}>
          <Image
            alt="img"
            src={img ? img : "/default.webP"}
            width={100}
            height={100}
            className={ cn("w-full",imgClass)}
            unoptimized= {true}
          />
        </Link>
      ) : (
        <Image
          alt="img"
          src={img ? img : "/default.webP"}
          width={100}
          height={100}
          className={ cn("w-full",imgClass)}
           unoptimized= {true}
        />
      )}

      <div
        className={ cn(`absolute bottom-0 w-full bg-[rgba(0,0,0,.5)] text-white font-medium  text-center text-xl py-1 ${
          !text && "hidden"
        } `,textContClass)}
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
