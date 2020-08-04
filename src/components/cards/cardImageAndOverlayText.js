import React from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'

const CardContainer = tw.div`w-full ml-2 mr-2 mb-2 `
const Card = tw(motion.a)`bg-transparent`

export const CardImageContainer = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-center bg-cover relative`,
])

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  ${tw`absolute inset-0 flex justify-center items-center`}
`
const CardContent = tw.div``
const CardTitle = tw.div`text-3xl uppercase text-diariolaranja font-bold
`

const CardText = tw.div`p-4 text-white`

export const VisitarPerfil = tw.button`
w-1/2 
text-center text-sm font-semibold text-white
bg-diariolaranja rounded-full
px-3 py-1
mt-5
lg:px-4 lg:py-2  lg:text-xl
transition duration-500 ease-in-out
hover:bg-blue-500 uppercase
transform hover:-translate-y-1 hover:scale-110`

export default ({ index, imageSrc, title, content, url }) => {
  // console.log(imageSrc)

  return (
    <CardContainer key={index}>
      <Card
        className="group"
        href={url}
        initial="rest"
        whileHover="hover"
        animate="rest"
        target="_blank"
      >
        <CardImageContainer imageSrc={imageSrc}>
          <CardHoverOverlay
            variants={{
              hover: {
                opacity: 1,
                height: 'auto',
              },
              rest: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{ duration: 0.4 }}
          >
            <CardContent>
              <CardText>
                <CardTitle>{title}</CardTitle>
                <CardContent>{content}</CardContent>
                <VisitarPerfil>Visitar Perfil</VisitarPerfil>
              </CardText>
            </CardContent>
          </CardHoverOverlay>
        </CardImageContainer>
      </Card>
    </CardContainer>
  )
}
