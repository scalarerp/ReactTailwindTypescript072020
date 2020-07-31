import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

const Container = tw.div`bg-white rounded overflow-hidden h-full shadow-lg`
const Title = tw.div`font-bold text-xl uppercase text-center pt-5 pl-6 pb-3`

export const ImageDivBackground12 = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-12 mt-5 bg-contain bg-center bg-no-repeat `,
])
export const ImageDivBackground64 = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 lg:h-128 mt-5 bg-contain bg-center bg-no-repeat transition duration-700 `,
])

export default ({
  index,
  hidden,
  imgHeader,
  imgContent,
  title,
  question = 'Saiba Mais',
  description = 'Lorem ipsum dolor sit amet',
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //   isOpen === 'hidden' ? setIsOpen('') : setIsOpen('hidden')
  // }
  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  }

  return (
    <Container>
      <ImageDivBackground12 imageSrc={imgHeader}></ImageDivBackground12>
      <Title>{title}</Title>
      <ImageDivBackground64 imageSrc={imgContent}></ImageDivBackground64>

      <div className="px-10 py-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full inline-block text-center text-sm font-semibold text-white
        bg-primary-400 rounded-full 
        px-3 py-1 
        lg:px-5 lg:py-2  lg:text-xl          
        transition duration-500 ease-in-out
        hover:bg-diariolaranja uppercase 
        transform hover:-translate-y-1 hover:scale-110"
        >
          {question}
        </button>
      </div>

      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <div className="px-6 py-4">
          <p className="text-gray-900 text-base leading-relaxed lg:text-xl">
            {description}
          </p>
        </div>
      </motion.nav>
    </Container>
  )
}
