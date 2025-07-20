'use client'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowUp, CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import depoiment1 from '../../public/depoiment-1.jpg'
import depoiment2 from '../../public/depoiment-2.jpg'
import depoiment3 from '../../public/depoiment-3.jpg'
import depoiment4 from '../../public/depoiment-4.jpg'
import { StaticImageData } from 'next/image'

export interface ImageProps {
   id: number,
   image: string | StaticImageData,
   
}

export interface DepoimentClientProps {
   images: ImageProps[]
}

interface perguntasProps {
   id: number,
   titulo: string,
   descricao: string,
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DepoimentClient({ images, }: DepoimentClientProps) {

   const [heightCurrent, setHeightCurrent] = useState<number | null>(null);

   const scrollContainerRef = useRef<HTMLDivElement>(null)


   const depoimentClients: ImageProps[] = [
      {
         id: 1,
         image: depoiment1,
      },
      {
         id: 2,
         image: depoiment2,
      },
      {
         id: 3,
         image: depoiment3,
      },
      {
         id: 4,
         image: depoiment4,
      }
   ]


   const item: perguntasProps[] = [
      {
         id: 1,
         titulo: 'Quando a SilvaDev começou?',
         descricao: '"A SilvaDev foi fundada há 2 anos com o propósito de transformar ideias em soluções digitais inovadoras. Desde o início, nosso foco tem sido oferecer serviços de desenvolvimento de sites, aplicativos mobile e manutenção, sempre com qualidade, eficiência e atenção às necessidades de nossos clientes. Com dedicação e paixão pela tecnologia, construímos uma trajetória sólida, conquistando tanto clientes locais quanto internacionais."'
      }, {
         id: 2,
         titulo: 'Seus clientes locais ou gringos?',
         descricao: '"Trabalho com clientes tanto locais quanto internacionais. Meu foco é atender às necessidades de cada projeto, independentemente da localização, sempre oferecendo soluções personalizadas e de alta qualidade."'
      }, {
         id: 3,
         titulo: 'Você exige pagamento adiantado?',
         descricao: '"Sim, trabalho com um modelo de pagamento adiantado parcial para garantir o comprometimento de ambas as partes. O restante pode ser feito conforme o andamento ou conclusão do projeto, sempre de forma clara e acordada previamente."'
      }, {
         id: 4,
         titulo: 'Quais as condições de pagamento?',
         descricao: '"Minhas condições de pagamento são flexíveis e adaptadas às necessidades do cliente. Aceito transferências bancárias, PIX e outros métodos combinados previamente. Geralmente, trabalho com um adiantamento parcial e o restante pode ser pago conforme as etapas do projeto ou na entrega final, sempre com total transparência."'
      }, {
         id: 5,
         titulo: 'Como será o início do projeto?',
         descricao: '"Começamos com uma conversa inicial para entender suas ideias e necessidades. Entre em contato para discutirmos seu projeto, definirmos os objetivos e alinharmos os próximos passos. Estou pronto para transformar sua visão em realidade!"'
      },
   ]


   useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const scrollSpeed = 2; // Pixels por frame
      const intervalTime = 30; // Intervalo entre movimentos (ms)

      const autoScroll = setInterval(() => {
         scrollContainer.scrollBy({ left: scrollSpeed, behavior: 'smooth' });

         // Reinicia quando chega ao final "duplicado"
         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0; // Volta para o início
         }
      }, intervalTime);

      return () => clearInterval(autoScroll); // Limpa o intervalo ao desmontar o componente
   }, []);


   function toggleheight(id: number) {

      setHeightCurrent((heightC) => heightC === id ? null : id)

   }


   return (
      <div className="flex-shrink-0 w-full h-auto bg-slate-950 py-10 justify-center items-center mt-10 pt-[50px]">
         <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6">
            Depoimentos de Clientes
         </h1>

         <div className="flex w-full overflow-x-auto gap-5 px-5" style={{

            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth', // Rolagem suave
            marginTop: 50,
         }}
         /* ref={scrollContainerRef} */

         >
            <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style>
            {depoimentClients.map((image) => (
               <div
                  key={image.id}
                  className="border-primary-dark transition-all duration-500"

               >
                  <Image
                     src={image.image}
                     alt={`Depoimento ${image.id}`}
                     width={0}
                     height={0}
                     quality={90}
                     sizes={'100vw'}
                     className="object-cover"
                     style={{
                        minWidth: 320,

                     }}
                  />
               </div>
            ))}
         </div>
         <div className='relative md:flex w-full items-center md:justify-between justify-center' style={{ marginTop: 100, marginBottom: 100 }}>
            <div className='w-full' style={{ width: '100%', padding: 20 }}>
               <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6">
                  &quot;Porque escolher a silvadev?&quot;
               </h1>
               <p className={'text-white font-mono'}>Transformamos suas ideias em soluções digitais práticas e impactantes, com criatividade, eficiência e um suporte que você pode confiar.</p>

            </div>

            <div className='flex-row justify-center items-center md:mt-0' style={{ width: '100%', backgroundColor: '#fff', borderRadius: 16 }}>

               <div className='w-full p-[20px] items-center justify-center bg-primary-light  overflow-hidden' style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                  <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center" >
                     A silvadev é Conhecidos por
                  </h1>
               </div>

               <div className='flex-col p-5' style={{ gap: 10 }}>
                  <div className='flex gap-4 ' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Desenvolvimento com Resposivo.</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Integração de Sistemas e API Rest.</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Comprometimento com prazos.</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Fidelidade com layout pronto do cliente.</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Lançamentos na PlayStore e AppleStore.</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Manutenções e correções de bug&apos;s</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#1e3a8a'} />
                     <h1 className='text-primary-dark font-mono text-lg'>Entre outras mais&apos;s</h1>
                  </div>
                  <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                     <Button className='mt-8' style={{ padding: 20 }}>Contate-nos</Button>
                  </Link>
               </div>
            </div>
         </div>
         <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6 ">Perguntas Frequentes</h1>
         {item.map((item) => (
            <div className={`flex-col w-full justify-center items-center focus:outline-none focus:ring-2 focus:ring-blue-400}`}
               key={item.id}
            >

               <div
                  className="flex-col rounded-lg"
                  style={{ backgroundColor: '#1e3a8a', borderRadius: 15 }}
               >
                  <div
                     className="flex-col shadow-lg p-5"
                     style={{ backgroundColor: '#fff' }}
                  >
                     <div
                        className={`flex justify-between items-center ${heightCurrent === item.id ? 'hover:transition-transform duration-300 hover:ease-linear' : ''
                           }`}
                        onClick={() => toggleheight(item.id)}
                     >
                        <h1 className="text-black font-mono md:text-xl font-semibold">
                           {item.titulo}
                        </h1>

                        {heightCurrent === item.id ? (
                           <ArrowDown color="#000" className="cursor-pointer" />
                        ) : (
                           <ArrowUp color="#000" className="cursor-pointer" />
                        )}
                     </div>

                     {heightCurrent === item.id && (
                        <p
                           className={`text-white font-mono shadow-lg`}
                           style={{
                              marginTop: 10,
                              backgroundColor: '#3a82f6',
                              minHeight: 60,
                              padding: 10,
                              fontSize: window.innerWidth >= 768 ? 16 : 10,
                              opacity: heightCurrent === item.id ? 1 : 0,
                              transform: heightCurrent === item.id
                                 ? 'translate(0, 0)'
                                 : 'translateY(-10px)',
                           }}
                        >
                           {item.descricao}
                        </p>
                     )}
                  </div>
               </div>

            </div>
         ))}
      </div>
   )
}
