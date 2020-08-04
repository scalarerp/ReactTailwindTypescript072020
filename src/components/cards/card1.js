import React, { useState } from 'react'
import tw from 'twin.macro'
import { motion } from 'framer-motion'
import {
  ImageDivBackground64,
  ImageDivBackground12,
  Title,
  SaibaMais,
  Variants,
} from 'components/misc'

const Container = tw.div`
bg-white rounded overflow-hidden h-full shadow-lg`

export default ({
  imgHeader,
  imgContent,
  title,

  description = 'Lorem ipsum dolor sit amet',
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <ImageDivBackground12 imageSrc={imgHeader}></ImageDivBackground12>
      <Title>{title}</Title>
      <ImageDivBackground64 imageSrc={imgContent}></ImageDivBackground64>

      <div className="px-10 py-4 text-center">
        <SaibaMais onClick={() => setIsOpen(!isOpen)}></SaibaMais>
      </div>

      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={Variants}>
        <div className="px-6 py-4">
          <p className="text-gray-900 text-base leading-relaxed lg:text-xl">
            {description}
          </p>
        </div>
      </motion.nav>
    </Container>
  )
}
