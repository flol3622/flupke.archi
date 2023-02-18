import { useState } from "react";
import { Blurhash } from "react-blurhash";
import Image, { ImageProps } from "next/image";

type MyImageProps = {
  src: string;
  hash: string;
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
    <div {...props}>
      {!imageLoaded && (
        <Blurhash hash={hash} style={{ width: "100%", height: "100%" }} />
      )}
      <Image
        src={src}
        alt={alt || ""}
        onLoadingComplete={() => setImageLoaded(true)}
        className="absolute bg-white object-cover "
        style={{ opacity: imageLoaded ? 1 : 0, objectFit: "cover" }}
        fill
      />
    </div>
  );
}
