"use client"
import React, { useState } from 'react'
import WhatsAppImage from '../../public/whatsapp-logo.png';
import Image, { StaticImageData } from 'next/image';

interface WhatsappProjectProps {
    projectName: string;
    text: string
}

const WhatsProject: React.FC<WhatsappProjectProps> = ({ projectName }) => {

    const [isHovered, setIsHovered] = useState(false)

    const whatsappNumber = '5585997759542'
    const message = `Olá, bem-vindo a The Silva Dev, Vi que está interessado no projeto "${projectName}". Podemos conversar sobre mais detalhes?`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div
      className={`fixed flex items-center justify-center rounded-full p-3 shadow-lg cursor-pointer transition-transform duration-300 ${
        isHovered ? 'scale-110 rotate-6 opacity-90' : 'scale-100'
      }`}
      style={{
        bottom: 0,
        right: 40,
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
          Olá, fale conosco sobre o projeto {projectName}.
        </p>
      )}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={WhatsAppImage as string | StaticImageData}
          alt="Contato pelo WhatsApp"
          width={35}
          height={35}
        />
      </a>
    </div>
  );
};
export default WhatsProject;