'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import WhatsAppImage from '../../public/whatsapp-logo.png';

const WhatsAppContact = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const [cury, setCury] = useState(false)

   const whatsappNumber = '5541995825340'; // Substitua pelo número do WhatsApp
   const message = 'Olá! Preciso de mais informações.';
   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


   /* useEffect(() => {
       const handleScroll = () => {
           const scrollPosition = window.scrollY + window.innerHeight;
           const pageHeight = document.documentElement.scrollHeight;

           // Verifica se o usuário chegou ao final da página
           if (scrollPosition >= pageHeight - 10) {
               setIsAtBottom(true);
           } else {
               setIsAtBottom(false);
           }
       };

       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
   }, []); 
*/



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
               src={WhatsAppImage.src}
               alt="Contato pelo WhatsApp"
               width={45}
               height={45}
            />
         </a>
      </div>
   );
};

export default WhatsAppContact;
