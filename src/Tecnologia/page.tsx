'use client'
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
      <div className='flex w-full flex-col md:w-full md:h-[100vw] p-[50px] items-center justify-between md:flex relative bg-slate-950' >
         {/* Contêiner flexível para scroll infinito */}

         <div className='flex-wrap w-full '>
            <h1 className="md:text-3xl text-2xl text-white font-mono font-bold pt-10 text-center uppercase" style={{marginBottom:50}}>Explorando tecnologias e as dominando</h1>

            <p className='text-white font-mono italic'>
               <span className='text-xl'>"</span>  Aqui, compartilho algumas das principais tecnologias que utilizo para transformar ideias em soluções completas e eficientes. Minha escolha de ferramentas sempre considera as necessidades específicas de cada projeto, garantindo que as soluções desenvolvidas sejam funcionais, escaláveis e alinhadas aos objetivos do cliente.
               <span className='text-xl'>"</span>
            </p>
            <div className='text-white font-mono text-lg p-10 mt-10 shadow-lg shadow-white' style={{borderBottomWidth: 4, borderLeftWidth: 4, borderColor: '#6716cf', borderBottomLeftRadius: 30, }}>
               <h1 className='text-2xl uppercase mb-10'>Minhas Skills...</h1>
               No front-end, o<b className='text-[#6716cf] font-mono italic bg-white w-full'> JavaScript</b>  reina como a base para a criação de experiências ricas e interativas, em conjunto com <b className='text-[#6716cf] font-mono'>React</b>  e <b className='text-[#6716cf] font-mono'>Next.js</b>, que me permitem desenvolver interfaces modernas e de alta performance. Para aplicações mobile, combino a flexibilidade do <b className='text-[#6716cf] font-mono'>React Native</b> com a eficiência do Expo, criando aplicativos que oferecem ótima usabilidade.

               No back-end, <b className='text-[#6716cf] font-mono'>Node.js</b> é minha escolha para construir APIs robustas e escaláveis, enquanto ferramentas como <b className='text-[#6716cf] font-mono'>Prisma</b> e <b className='text-[#6716cf] font-mono'>Drizzle</b> garantem uma manipulação de dados eficaz e segura. Firebase se destaca por permitir integrações em tempo real e autenticação confiável, essencial para muitos projetos modernos.

               Quanto ao design e estilo, <b className='text-[#6716cf] font-mono'>CSS</b> é a base, complementada pela agilidade do <b className='text-[#6716cf] font-mono'>Tailwind CSS</b> e a elegância dos componentes de <b className='text-[#6716cf] font-mono'>Shadcn-UI</b>, que ajudam a criar interfaces consistentes e atraentes.

               Estas são apenas algumas das ferramentas que fazem parte do meu dia a dia. Cada projeto é único, e minha prioridade é sempre encontrar as melhores combinações para atender às suas necessidades. Vamos transformar sua ideia em realidade com as tecnologias certas!


            </div>


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
                  className="border-violet-600 transition-all duration-500"
                  key={item.id}
                  style={{
                     borderLeftWidth: 2,
                     borderBottomWidth: 2,
                     borderColor: '#ccc',
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