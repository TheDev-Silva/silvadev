'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import WhatsAppImage from '../../public/whatsapp-logo.png';
import { StaticImageData } from 'next/image';



const WhatsAppContact = () => {
   const [isHovered, setIsHovered] = useState(false);
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [isAtBottom, setIsAtBottom] = useState(false);

   const whatsappNumber = '5541995825340'; // Substitua pelo número do WhatsApp
   const message = 'Olá! Preciso de mais informações.';
   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


   return (
      <div
         className={`fixed flex items-center justify-center rounded-full p-3 shadow-lg cursor-pointer ${isHovered ? 'hover:scale-150' : 'scale-0'} ${isHovered ? 'hover:rotate-6' : ''} ${isHovered ? 'hover:transition-transform' : ''} ${isHovered ? 'duration-300' : ''} ${isHovered ? 'hover:opacity-90' : ''} `}
         style={{
            bottom: isAtBottom ? 10 : 30,
            right: isAtBottom ? '40%' : 40,

            transform: isAtBottom ? 'translateX(-50%)' : 'none',
         }}
         onMouseOver={() => setIsHovered(true)}
         onMouseOut={() => setIsHovered(false)}
      >
         {isHovered && (
            <p
               className="absolute text-black p-2 text-center rounded-lg text-sm font-mono"
               style={{
                  top: -40,
                  right: 10,
                  minWidth: 200,
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
               }}
            >
               Olá, fale conosco aqui.

            </p>
         )}
         <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
         >
            <Image
               src={WhatsAppImage as string | StaticImageData}
               alt="Contato pelo WhatsApp"
               width={45}
               height={45}
            />
         </a>
      </div>
   );
};

export default WhatsAppContact;
