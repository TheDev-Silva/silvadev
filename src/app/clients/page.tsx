'use client';

import React, { useEffect, useState } from 'react';

interface ClientProps {
   id: number;
   name: string;
   password: string;
   email: string;
   phone: number;
   message: string;
}

export default function Clients() {
   const [clientData, setClientData] = useState<ClientProps[] | null>(null);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const handleClient = async () => {
         try {
            const response = await fetch('http://localhost:3333/clients', {
               method: 'GET', // Corrigido para GET
               headers: {
                  'Content-Type': 'application/json',
               },
            });

            if (!response.ok) {
               throw new Error(`Failed to fetch: ${response.statusText}`);
            }

            const data: ClientProps = await response.json();
            setClientData(data as any);
         } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
         }
      };

      handleClient();
   }, []);

   if (error) {
      return <div>Error: {error}</div>;
   }

   if (!clientData) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         {clientData.map((client) => (
            <div key={client.id}>
               <p className='text-white'>Name: {client.name}</p>
               <p className='text-white'>Email: {client.email}</p>
               <p className='text-white'>Phone: {client.phone}</p>
            </div>
         ))}
      </div>
   );
}
