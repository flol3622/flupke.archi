import { useState } from "react";
import { Blurhash } from "react-blurhash";
import Image, { ImageProps } from "next/image";

type MyImageProps = {
  src: string;
  hash: string;
  width: number;
  height: number;
  fill?: boolean;
  alt?: string;
};

export default function MyImage({
  src,
  alt,
  width,
  height,
  hash,
  ...props
}: MyImageProps & ImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
      }}
      {...props}
    >
      {!imageLoaded && (
        <Blurhash hash={hash} style={{width:"100%", height:"100%"}}/>
      )}
      <Image
        src={src}
        alt={alt || ""}
        onLoadingComplete={() => setImageLoaded(true)}
        className="absolute object-cover"
        style={{ opacity: imageLoaded ? 1 : 0, objectFit: "cover" }}
        fill
      />
    </div>
  );
}
