'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import WhatsAppImage from '../../public/whatsapp-logo.png';

const WhatsAppContact = () => {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappNumber = '5541995825340'; // Substitua pelo número do WhatsApp
    const message = 'Olá! Preciso de mais informações.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div
            className={`fixed z-50 flex items-center justify-center rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 ${isHovered ? 'bg-green-200' : 'bg-white'
                }`}
            style={{
                bottom: 80,
                right: 40,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                className={`'animate-float'`}
            >
                <Image
                    src={WhatsAppImage.src}
                    alt="Contato pelo WhatsApp"
                    width={isHovered ? 40 : 60}
                    height={isHovered ? 40 : 60}
                    style={{width: isHovered ? 50 : 40, height: isHovered ? 50 : 40, rotate: isHovered ? '15deg' : '0deg', transition: isHovered ? 'ease-in' : '', transitionDuration: isHovered ? 'unset' : 'initial'}}
                />
            </a>
        </div>
    );
};

export default WhatsAppContact;
