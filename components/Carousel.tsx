import Image from "next/image";
import Link from "next/link";

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div className="flex justify-center mt-9">
      <div className="carousel w-full rounded-md">
        {images.map((url, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <Image
              src={url}
              className="w-full"
              alt=""
              width="1920"
              height="1080"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link
                href={`#slide${
                  index - 1 === -1 ? images.length - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </Link>
              <Link
                href={`#slide${index + 1 === images.length ? 0 : index + 1}`}
                className="btn btn-circle"
              >
                ❯
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
