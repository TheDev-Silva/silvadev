'use client'

import { useRouter } from 'next/navigation';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineLoading, AiOutlineWhatsApp } from 'react-icons/ai'
/* import Router from 'next/navigation'; */
import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { relative } from 'path';
import Header from '../Header/Header';

export default function Contact() {

   const route = useRouter()

   const [formData, setFormData] = useState({
      name: '', email: '', phone: '', message: ''
   })
   const [responseMessage, setResponseMessage] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   const formatPhone = (value: string) => {
      // Remove todos os caracteres não numéricos
      const onlyNumbers = value.replace(/\D/g, "");

      // Aplica a máscara (00) 99999-9999
      if (onlyNumbers.length <= 2) {
         return `(${onlyNumbers}`;
      } else if (onlyNumbers.length <= 7) {
         return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
      } else {
         return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7, 11)}`;
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const formattedValue = name === 'phone' ? formatPhone(value) : value;

      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true)



      try {
         const response = await fetch('http://localhost:3333/create-client', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            console.log(response);
            setResponseMessage('Email enviado com sucesso! Verifique seu e-mail, lixo eletronico ou spam');
            setFormData({ name: '', email: '', phone: '', message: '' }) // Limpa o formulário
            setTimeout(() => {
               route.push('/')
            }, 3000);
         } else {
            const { error } = await response.json();
            setResponseMessage(`Erro: ${error}`);
         }
      } catch (error) {
         console.error('Erro ao enviar a ideia:', error);
         setResponseMessage('Erro ao enviar sua ideia. Tente novamente mais tarde!');
      } finally {
         setIsLoading(false)
      }
   };

   const whatsappNumber = '5541995825340'; // Substitua com o número de WhatsApp (com DDD, sem espaços ou símbolos)
   const message = 'Olá! Preciso de mais informações.'; // A mensagem que aparecerá ao abrir o WhatsApp

   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


   return (


      <div className='flex-wrap w-full relative '>
         <h1 className="md:text-3xl text-2xl text-white font-mono font-bold pt-10 text-center" style={{ marginBottom: 10 }}>contate-nos ou tire sua dúvida</h1>

         <div className='w-full relative md:flex items-center md:justify-between justify-center md:pt-[50px] pt-[20px] md:px-10 md:h-[100vh] min-h-[100vh]'>
            {/* Círculo decorativo ao fundo */}
            <div
               className='absolute -inset-0 md:w-[200px] md:h-[200px] h-[100px] w-[100px] left-9 top-[30px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] transition-all duration-300 blur-md'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            >
            </div>
            <div
               className='absolute w-[50px] h-[50px] right-5 bottom-[20px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] opacity-90 transition-all duration-300 blur-md'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            >

            </div>
            <div
               className='absolute md:w-[50px] md:h-[50px] w-[40px] h-[40px] left-5  rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] bottom-[100px] transition-all duration-300 blur-md'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            >

            </div>
            <div
               className='absolute md:w-[150px] md:h-[150px] max-h-md w-[80px] h-[80px] rounded-full bg-gradient-to-tr to-[#6716cf] from-[#000] right-10 top-52 bottom-[100px] transition-all duration-300 blur-md'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            ></div>
            <div className='flex-wrap z-10 relative'>

              


               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.682043204882!2d-49.261682325624854!3d-25.54896603760742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbc3fe73fad1%3A0x259766fdb5ecc1b4!2sR.%20Des.%20Carlos%20Pinheiro%20Guimar%C3%A3es%2C%20244%20-%20S%C3%ADtio%20Cercado%2C%20Curitiba%20-%20PR%2C%2081925-450!5e0!3m2!1spt-BR!2sbr!4v1738576205517!5m2!1spt-BR!2sbr" width="0" height="0" className='md:w-[450px] w-full md:h-[300px] h-[190px]'></iframe>
               
               <div className='flex-col justify-center items-center mt-10'>
                  <p className='text-white font-mono mb-2'>redes socias </p>
                  <div className='flex gap-10'>
                     <Link href={'https://www.instagram.com/silva.developer/'}>
                        <AiOutlineInstagram size={30} color='#ffff' />
                     </Link>
                     <Link href={'https://github.com/TheDev-Silva/'}>
                        <AiOutlineGithub size={30} color='#ffff' />
                     </Link>
                     <Link href={'https://www.linkedin.com/in/germano-silva-909372248/'}>
                        <AiOutlineLinkedin size={30} color='#ffff' />
                     </Link>
                     <Link href={whatsappUrl}>
                        <AiOutlineWhatsApp size={30} color='#ffff' />
                     </Link>
                  </div>

               </div>
            </div>
            {/* Conteúdo principal */}
            <div
               style={{
                  
                  flexDirection: 'column',
                  borderColor: '#6716cf',
                  borderBottomLeftRadius: 20,
                  backgroundColor: '#6716cf29',
                  borderRadius: 30,
                  marginTop: 40,
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
               className="border-neon shadow-neon relative"
            >
               <div className='relative bg-[#6716cf29] p-4 justify-center items-center' style={{ borderRadius: 30 }}>
                  <p className='text-white font-mono m-4 mb-[-20px] text-center'>Vamos criar um projeto incrivel juntos?</p>
                  <p className='text-white font-mono m-4 '>Mande sua ideia.</p>

                  <form onSubmit={handleSubmit} className='w-fill flex flex-col gap-5 p-4'>
                     <div className='flex flex-col relative z-10'>
                        {/* <label className='absolute left-2 top-2 opacity-45 hover:top-[-4px]'>Nome</label> */}
                        <input
                           type="name"
                           name='name'
                           autoComplete={'name'}
                           placeholder="Nome completo"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className='w-[400px], p-2 rounded-sm'

                        />
                     </div>

                     <input
                        type="email"
                        name='email'
                        autoComplete={'email'}
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-[400px], p-2 rounded-sm '
                     />
                     <input
                        type="tel"
                        autoComplete={'tel'}
                        name='phone'
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='w-[400px], p-2 rounded-sm '
                     />
                     <textarea
                        name='message'
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='h-200 p-2'
                     >

                     </textarea>
                     {isLoading ? <button type="submit" className='flex w-full text-white hover:bg-[#6716cf] bg-[#6716cf89] transition-all duration-300 p-3 rounded-sm text-center items-center justify-center gap-3'>
                        <AiOutlineLoading className='animate-spin ease-linear spin-in-45' size={24} /> ENVIANDO SUA IDEIA...
                     </button> : <button type="submit" className='flex w-full text-white hover:bg-[#6716cf] bg-[#6716cf89] transition-all duration-300 p-3 rounded-sm text-center items-center justify-center text-sm font-thin'>ENVIAR IDEIA</button>}
                  </form>
                  {responseMessage && <p className='text-white'> {responseMessage}</p>}
               </div>
            </div>
         </div>
      </div>

   );
}
