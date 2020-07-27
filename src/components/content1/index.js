import React from 'react'
import { Container } from './styles'

const Content1 = () => {
  return (
    <Container>
      <div
        className="flex flex-col justify-center 
      pt-20 px-20 text-center divide-y divide-gray-400 "
      >
        <h1 className="text-5xl  font-extrabold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
          Uma agência especializada em redes sociais
        </h1>
        <p className="mt-6 mb-12 pt-12 text-lg font-bold text-gray-700 dark:text-gray-400">
          Marque presença nas redes, tenha uma posição de destaque e aproxime-se
          de seus clientes.
        </p>
      </div>
    </Container>
  )
}

export default Content1
