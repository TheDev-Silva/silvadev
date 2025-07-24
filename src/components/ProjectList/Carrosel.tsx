import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//import Header from '../Header/Header';

interface imagePros {
   id: number,
   image: StaticImageData | string
}
interface CarouselProps {
   images: imagePros[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
   };

   const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 2 + images.length) % images.length);
   };

   const isValidImage = (src: StaticImageData | string) => {
      return src && (typeof src === 'string' ? src.trim() !== '' : true);
   };

   return (
      <>
         {/* <Header /> */}
         <div className="relative md:w-[100%] w-[100%] flex-col items-center overflow-hidden">
            <div className="flex justify-center items-center">
               {images.slice(currentIndex, currentIndex + 2).map((img, index) => (
                  isValidImage(img.image) ? (
                     <div key={img.id} className='flex md:w-[70%] w-[100%] p-1 justify-center items-center'>
                        <Image
                           src={img.image}
                           alt={`Image ${index + 1}`}
                           width={360}
                           height={360}
                           sizes={'100vw'}
                           quality={90}
                           className="object-contain rounded-lg md:w-[50%] md:h-[50%] w-[100%] h-[100%]"
                        />
                     </div>
                  ) : (
                     <div className="w-64 h-64 bg-gray-300 rounded-sm flex items-center justify-center" key={img.id}>
                        <span className="text-white">Imagem não disponível</span>
                     </div>
                  )


               ))}
            </div>

            <div className="flex mt-4 justify-around items-center p-1">
               <button onClick={handlePrev} className='p-2 rounded-xl'>
                  <FaArrowLeft color='#fff' />
               </button>
               <button onClick={handleNext} className='p-2 rounded-xl'>
                  <FaArrowRight color='#fff' />
               </button>
            </div>
         </div>
      </>
   );
};