import Image from "next/image";

const Carousel1 = () => {
  return (
    <div className="container w-full mx-auto carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <Image src="/image/car-1.jpg" height={400} width={1440} alt="carouselft1"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className=""> ❮ </a>
          <a href="#slide2" className=""> ❯ </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <Image src="/image/car-2.jpg" height={400} width={1440} alt="carouselft2"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="">
            ❮
          </a>
          <a href="#slide3" className="">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <Image src="/image/car-3.jpg" height={400} width={1440} alt="carouselft3"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="">
            ❮
          </a>
          <a href="#slide4" className="">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <Image src="/image/car-4.jpg" height={400} width={1440} alt="carouselft2"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="">
            ❮
          </a>
          <a href="#slide1" className="">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
