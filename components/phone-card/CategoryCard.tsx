import Image from "next/image";
import React from "react";
import cardPhone from "../../public/image/cardPhone.jpg";
import Link from "next/link";

interface PageProps {
  imgUrl: string;
  name: string;
  path: string;
}

function CategoryCard({ imgUrl, name, path }: PageProps) {
  return (
    <div className=" xl:w-[25%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/phones/${path}`}>
        <div className="w-full h-[35vh]">
          <Image
            className="rounded-t-xl w-full h-full"
            src={imgUrl ? imgUrl : cardPhone}
            alt="mobile"
            unoptimized
          />
        </div>
        <div className="bg-[#252728] px-2 pb-10 pt-1 ">
          <h4 className="font-sans font-bold text-white">{name}</h4>
          <button className="text-gray-500">Read more</button>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
