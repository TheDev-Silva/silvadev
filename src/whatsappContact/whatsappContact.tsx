'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Importa a tag de imagem do Next.js
import WhatsAppImage from '../../public/whatsapp-logo.png'




const WhatsAppContact = () => {
    const [isHovered, setIsHovered] = useState(false);
    const imageWhats = {
        image: WhatsAppImage.src
    }
    const whatsappNumber = '5541995825340'; // Substitua com o número de WhatsApp (com DDD, sem espaços ou símbolos)
    const message = 'Olá! Preciso de mais informações.'; // A mensagem que aparecerá ao abrir o WhatsApp

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    return (
        <div
            className={`fixed z-50 flex items-center justify-center rounded-full p-3 shadow-lg cursor-pointer ${isHovered ? 'animate-float' : ''}`}
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', bottom: 80, right: 40 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            {isHovered ? <p className='absolute text-black p-1 text-center rounded-lg text-sm font-mono' style={{ top: -30,left: -150, transition: 'ease-in-out', float: 'right', minWidth: 200, backgroundColor: '#fff' }}>Olá, fale conosco aqui.</p> : ''}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Image
                    src={imageWhats.image}// Caminho da imagem da logo do WhatsApp
                    alt="WhatsApp"
                    width={40} // Tamanho desejado
                    height={40} // Tamanho desejado
                />
            </a>
        </div>
    );
};

export default WhatsAppContact;
