'use client'
import { Button } from '@/components/ui/button';
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface TectProps {
   id: number;
   name: string;
   description: string,
   image: string | StaticImageData;
}

interface TecnologiasProp {
   tecnologyItem: TectProps[];
}

export default function Tecnologias({ tecnologyItem }: TecnologiasProp) {
   const [selectItem, setSelectItem] = useState<TectProps | null>(null)



   return (
      <div className='flex w-full flex-col md:w-full md:h-[100vw] items-center justify-between md:flex relative bg-slate-950' >
         {/* Contêiner flexível para scroll infinito */}

         <div className='flex-wrap w-full '>
            <h1 className="md:text-3xl text-2xl text-white font-mono font-bold pt-10 text-center uppercase" style={{ marginBottom: 50 }}>Explorando tecnologias e as dominando</h1>

            <p className='text-white font-mono italic'>
               <span className='text-xl'>&quot;</span>Aqui, compartilho algumas das principais tecnologias que utilizo para transformar ideias em soluções completas e eficientes. Minha escolha de ferramentas sempre considera as necessidades específicas de cada projeto, garantindo que as soluções desenvolvidas sejam funcionais, escaláveis e alinhadas aos objetivos do cliente.
               <span className='text-xl'>&quot;</span>

            </p>
            <div className='text-white font-mono md:text-lg text-base md:p-5 p-8 mt-5 shadow-lg shadow-white' style={{ borderBottomWidth: 2, borderLeftWidth: 2, borderColor: '#1e3a8a', borderBottomLeftRadius: 30, }}>

               No front-end, o<b className='text-primary-light font-mono italic '> JavaScript</b>  reina como a base para a criação de experiências ricas e interativas, em conjunto com <b className='text-primary-light font-mono'>React</b>  e <b className='text-primary-light font-mono'>Next.js</b>, que me permitem desenvolver interfaces modernas e de alta performance. Para aplicações mobile, combino a flexibilidade do <b className='text-primary-light font-mono'>React Native</b> com a eficiência do Expo, criando aplicativos que oferecem ótima usabilidade.

               <br className=''></br><br className=''></br>No back-end, o <b className='text-primary-light font-mono'>Node.js</b> é minha escolha para construir APIs robustas e quando necessárias escaláveis, enquanto ferramentas como <b className='text-primary-light font-mono'>Prisma ORM</b> e <b className='text-primary-light font-mono'>Drizzle</b> garantem uma manipulação de dados eficaz e segura. já o Firebase se destaca por permitir integrações em tempo real e autenticação confiável, essencial para muitos projetos modernos.

               Quanto ao design e estilo, <b className='text-primary-light font-mono'>CSS</b> é a base, complementada pela agilidade do <b className='text-primary-light font-mono'>Tailwind CSS</b> e a elegância dos componentes de <b className='text-primary-light font-mono'>Shadcn-UI</b>, que ajudam a criar interfaces consistentes e atraentes.

               Estas são apenas algumas das ferramentas que fazem parte do meu dia a dia. Cada projeto é único, e minha prioridade é sempre encontrar as melhores combinações para atender às suas necessidades.
               <br className=''></br><br className='text-lg'></br>E então? Vamos transformar sua ideia em realidade com as tecnologias certas!
               <br></br>
               <Button className='mt-10 bg-primary-light rounded-md hover:bg-white' style={{textTransform: 'uppercase'}}>Acesse aqui!</Button>


            </div>
            <h1 className='md:text-3xl text-2xl font-bold font-mono text-white text-center' style={{ marginBottom: -62, marginTop: 42 }}>Skill do dia-a-dia</h1>

         </div>

         <div className="flex w-full items-center m-10" style={{

            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth', // Rolagem suave
            marginTop: 100,
         }} >

            <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style>
            {/* Mapeamento da lista original */}
            {tecnologyItem.map((item) => (
               <div
                  className="border-[#1e3a8a] transition-all duration-500"
                  key={item.id}
                  style={{
                     borderLeftWidth: 2,
                     borderBottomWidth: 2,
                     borderColor: '#3b82f6',
                     borderRadius: 14,
                     margin: 10,

                  }}
               >
                  <div
                     onMouseEnter={() => setSelectItem(item)}
                     onMouseLeave={() => setSelectItem(null)}
                     className="flex relative w-full h-100 items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out  bg-red-500"
                     style={{
                        transform: selectItem?.id === item.id ? 'translate(10px, -10px)' : 'translate(0, 0)',
                     }}
                  >
                     <Image
                        src={item.image}
                        alt={item.name}
                        width={0}
                        height={0}
                        quality={90}
                        className="object-contain"
                        style={{
                           minWidth: 150,
                        }}
                     />
                  </div>
               </div>



            ))}

         </div>
         
      </div>
   );
}