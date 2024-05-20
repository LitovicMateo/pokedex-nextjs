import React from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
};

const PokemonImage: React.FC<ImageProps> = ({ alt, src }) => {
  return (
    <div className="relative h-full aspect-square z-50">
      <Image src={src} alt={alt} fill  />;
    </div>
  );
};

export default PokemonImage;
