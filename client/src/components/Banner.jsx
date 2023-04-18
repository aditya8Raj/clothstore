import React, { useState, useEffect } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://media.discordapp.net/attachments/1096748863907446794/1097064451020181565/img1.jpg",
    "https://media.discordapp.net/attachments/1096748863907446794/1097064451368288357/img2.jpg",
    "https://media.discordapp.net/attachments/1096748863907446794/1097064451619958874/img3.jpg",
    "https://media.discordapp.net/attachments/1096748863907446794/1097064451984871444/img4.jpg",
  ];

  useEffect(() => {
    // Use setInterval to automatically switch to the next slide every 2 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    // Clear the interval when the component unmounts or when the current slide changes
    return () => clearInterval(intervalId);
  }, [currentSlide, data.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400w] h-full flex transition-transform duration-1000"
        >
          {data.map((imgUrl, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={imgUrl}
              alt={`Img${index + 1}`}
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute w-fit left-9 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <VscArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <VscArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
