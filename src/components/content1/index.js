import React from 'react'
import { Container, ContentWithPaddingXl } from '../misc.js'
// import { WindupChildren } from 'windups'

const Content1 = () => {
  return (
    <Container className="bg-white mb-10">
      <ContentWithPaddingXl>
        {/* <WindupChildren> */}
        <div className="flex flex-col justify-center text-center divide-y divide-gray-400 ">
          <div className="text-1.5rem lg:text-2.5rem font-panton font-bold uppercase leading-none tracking-tight text-gray-800  ">
            Uma agência especializada em redes sociais
          </div>

          <div className="mt-6 py-7 pt-12 text-1rem lg:text-1.5rem font-bold text-gray-700 dark:text-gray-400">
            Marque presença nas redes, tenha uma posição de destaque e
            aproxime-se de seus clientes.
          </div>
        </div>
        {/* </WindupChildren> */}
      </ContentWithPaddingXl>
    </Container>
  )
}

export default Content1
