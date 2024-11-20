'use client'

import { useRouter } from 'next/navigation';
import { AiOutlineLoading } from 'react-icons/ai'
/* import Router from 'next/navigation'; */
import React, { useState } from 'react';
import { Router } from 'next/router';

export default function Contact() {

   const route = useRouter()

   const [formData, setFormData] = useState({
      name: '', email: '', phone: '', message: ''
   })
   const [responseMessage, setResponseMessage] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true)

      try {
         const response = await fetch('http://localhost:3333/clients', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {

            setResponseMessage('Cadastro realizado com sucesso! Verifique seu e-mail.');
            setFormData({ name: '', email: '', phone: '', message: '' }) // Limpa o formulário
            setTimeout(() => {
               ; // Redireciona para a home
               // Se quiser apenas recarregar a página atual:

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
      <div className='relative md:flex w-full bg-black items-center md:justify-between justify-center p-10 md:pt-[150px] pt-[200px] px-10 md:px-40 md:h-[100vh] min-h-[100vh]'>
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
            <p className='text-white font-mono mb-2'>Telefone: (84) 99775-9542</p>
            <p className='text-white font-mono mb-2'>E-mail: silvadeveloper2024@gmail.com</p>
            <p className='text-white font-mono mb-2'>redes socias </p>

         </div>
         {/* Conteúdo principal */}
         <div className='relative z-10 text-center md:w-[400px] p-2 bg-[#6716cf99] rounded-lg shadow-lg ' style={{ borderWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <div className="backdrop-blur-lg"></div>
            <p className='text-white font-mono m-4'>Mande sua ideia, que a tornaremos realidade!</p>
            {/*  <a
                    href="mailto:exemplo@email.com?subject=Minha Ideia de Projeto&body=Olá, estou entrando em contato para compartilhar uma ideia de projeto..."
                    className='w-full py-2 bg-[#6716cf] text-white rounded-md hover:bg-purple-700 transition duration-200 block text-center'
                >
                    <p className='font-mono'>Envie sua Ideia</p>
                </a> */}
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
                  className='h-200'
               ></textarea>
               <button type="submit" className='w-full text-white bg-black p-3 rounded-sm text-center items-center'>{isLoading ? <AiOutlineLoading className='animate-spin ease-linear spin-in-45' size={24} /> : 'Enviar Ideia'}</button>
            </form>
            {responseMessage && <p className='text-white'> {responseMessage}</p>}
         </div>


      </div>
   );
}
