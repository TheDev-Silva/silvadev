import React from 'react';
import Image from 'next/image'; // Importa a tag de imagem do Next.js
import WhatsAppImage from '../../public/whatsapp-logo.png'




const WhatsAppContact = () => {
    const imageWhats = {
        image: WhatsAppImage.src
    }
    const whatsappNumber = '5541995825340'; // Substitua com o número de WhatsApp (com DDD, sem espaços ou símbolos)
    const message = 'Olá! Preciso de mais informações.'; // A mensagem que aparecerá ao abrir o WhatsApp

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div
            className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full p-3 shadow-lg cursor-pointer"
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
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
