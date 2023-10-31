import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
    <header className="bg-gray-800 text-white ">
          <nav className='flex justify-around items-center h-16'>
            <Link className='linkCabecalho' href="/consumo/eletro-view">ELETRONICOS</Link>
            <Link className='linkCabecalho' href="/produtos/estaticas/tenis">TENIS</Link>
            <Link className='linkCabecalho' href={"/produtos/dinamicas/estranho/tenis-preto"}>TENIS PRETO</Link>
            <Link className='linkCabecalho' href="/produtos/dinamicas/vestuario/camisa-xadrez">Camisa-X</Link>
          </nav>
        </header>
  )
}
