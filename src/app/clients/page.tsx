'use client'
import React from 'react'

export default function Clients() {

   const handleClient = async () => {



      const response = await fetch('http://localhost/3333/cadastrados', {
         method: 'post',
         headers: {
            'content-type': 'application/json'
         },
         body: ''
        })
   }



   return (
      <div>Clients</div>
   )
}
