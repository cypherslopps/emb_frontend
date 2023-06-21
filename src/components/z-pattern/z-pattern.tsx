import React from "react";
import Image, { StaticImageData } from 'next/image';
import Headline from "../headline/headline";


type Props = {
  headline?: String,
  title: String,
  content: String,
  imageSource: StaticImageData,
  variant?: "inverse",
  headlineColor?: String
}


function ZPattern({
  headline,
  title = "",
  content = "",
  imageSource,
  variant,
  headlineColor,
}: Props) {
  const patternIsInverse = variant === "inverse" ? true : false;

  return (
    <section
      className="mx-auto grid grid-cols-2 gap-x-14 md:w-[93%] xlg:w-[85%]"
      role="article"
    >
      <div
        className={`content relative flex flex-col z-50 md:mt-3.5 lg:pt-3 lg:mt-5 ${
          patternIsInverse ? "order-2" : ""
        }`}
      >
        {headline && <Headline title={headline} color={headlineColor} />}
        <h3 className="text-gray-900 dark:text-white font-semibold capitalize text-[1.8rem] mt-[.2rem] mb-[.7rem] lg:text-3.5xl lg:mb-3 lg:mt-0 xlg:mb-4">
          {title}
        </h3>
        <p className="leading-[1.75] text-[.98rem] font-light text-gray-700 dark:text-white/95 lg:leading-8 lg:text-base xlg:text-[1.04rem]">{content}</p>
      </div>

      <figure
        className={`rounded-lg overflow-hidden md:h-[16.5rem] lg:h-[18rem] xlg:h-[19rem] ${
          patternIsInverse ? "order-1" : ""
        }`}
      >
        <Image
          src={imageSource}
          alt="content image source"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </figure>
    </section>
  );
}

export default ZPattern;
