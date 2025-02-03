'use client'

import { useRouter } from 'next/navigation';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineLoading } from 'react-icons/ai'
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




   return (
      <div>
         <Header />

         <div className='relative md:flex w-full bg-black items-center md:justify-between justify-center md:pt-[150px] pt-[200px] py-20 px-10 md:px-40 md:h-[100vh] min-h-[100vh]'>
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
            <div className='relative z-10 mb-32 md:mb-0'>
               <h1 className='text-white font-mono text-4xl mb-4'>Contato</h1>
               <p className='text-white font-mono mb-2'>Entre em contato conosco!</p>
               <p className='text-white font-mono mb-2'>Telefone: (85) 99775-9542</p>
               <p className='text-white font-mono mb-2'>E-mail: silvadeveloper2024@gmail.com</p>
               <div className='flex flex-col'>
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
               className="border-neon shadow-neon"
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
