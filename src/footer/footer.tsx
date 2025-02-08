import { Copyright } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
        <div className='flex-wrap w-full justify-center items-center gap-3 pt-10 mt-10' style={{ borderTopWidth: 1, borderTopColor: '#c1c1c1' }}>
            <div className='flex gap-3'>
                <h1 className='text-white '>silvadev  </h1>
                <Copyright color='#fff' />
                <h1 className='text-white '>Todos os direitos recervados.</h1>
            </div>
            <div className='flex gap-3'>
                <h1 className='text-white '>suporte urgente </h1>
            </div>
        </div>
    )
}
export default Footer;