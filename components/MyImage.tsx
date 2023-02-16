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
  hash,
  ...props
}: MyImageProps & ImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!imageLoaded && <Blurhash hash={hash} {...props} />}
      <Image
        src={src}
        alt={alt || ""}
        onLoadingComplete={() => setImageLoaded(true)}
        style={{ opacity: imageLoaded ? 1 : 0, objectFit: "cover" }}
        {...props}
        fill={props.fill || false}
      />
    </div>
  );
}
