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
        <div className="invisible sm:visible sm:flex-1">
          <ImageDivBackground64 imageSrc={diario} />
        </div>
        <div className="flex-1 flex-col w-1/3 text-center">
          <ImageDivBackground12 imageSrc={megafone}></ImageDivBackground12>
          <Title>divulgação personalizada</Title>

          <div className="px-10 py-4 text-center">
            <SaibaMais onClick={() => setIsOpen(!isOpen)}></SaibaMais>
          </div>
        </div>
        <div className="invisible sm:visible sm:flex-1">
          <ImageDivBackground64 imageSrc={microfone} />
        </div>
      </div>

      <div className="w-full bg-gray-300">
        <motion.nav animate={isOpen ? 'open' : 'closed'} variants={Variants}>
          <div className="w-full">
            <p className="text-gray-900 p-5 text-base leading-relaxed lg:text-xl">
              Amplie seus locais de divulgação! Empresas que buscam
              credibilidade na sua região anunciam em veículos impressos, rádios
              e sites locais. Nossa agência seleciona as melhores mídias locais
              para fortalecer sua marca e atrair mais clientes.
            </p>
          </div>
        </motion.nav>
      </div>
    </Container>
  )
}

export default Content3
