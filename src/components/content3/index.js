import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Container,
  Title,
  ImageDivBackground12,
  ImageDivBackground64,
  SaibaMais,
  Variants,
} from '../misc.js'

import megafone from '../../assets/images/15.png'
import diario from '../../assets/images/9.png'
import microfone from '../../assets/images/10.png'

const Content3 = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <div className="flex p-2 bg-gray-300">
        <div className="w-1/5">
          <ImageDivBackground64 imageSrc={diario} />
        </div>
        <div className="flex flex-col text-center w-3/5">
          <ImageDivBackground12 imageSrc={megafone}></ImageDivBackground12>
          <Title>divulgação personalizada</Title>

          <div className="px-10 py-4 text-center">
            <SaibaMais onClick={() => setIsOpen(!isOpen)}></SaibaMais>
          </div>

          <motion.nav animate={isOpen ? 'open' : 'closed'} variants={Variants}>
            <div className="w-full">
              <p className="text-gray-900 p-5 text-base leading-relaxed lg:text-xl">
                Amplie seus locais de divulgação! Empresas que buscam
                credibilidade na sua região anunciam em veículos impressos,
                rádios e sites locais. Nossa agência seleciona as melhores
                mídias locais para fortalecer sua marca e atrair mais clientes.
              </p>
            </div>
          </motion.nav>
        </div>
        <div className="w-1/5 ">
          <ImageDivBackground64 imageSrc={microfone} />
        </div>
      </div>
    </Container>
  )
}

export default Content3
