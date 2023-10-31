import Link from 'next/link'
import React from 'react'

export default function CamisaSlug({params}) {
  return (
    <div>
        <h1>Dados de Camisa</h1>
        <div>
            <p>O valor é : {params.camisa}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
