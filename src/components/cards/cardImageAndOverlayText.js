import React from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'

const CardContainer = tw.div`w-full`
const Card = tw(motion.a)`bg-transparent`

export const CardImageContainer = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 lg:h-128 bg-center bg-cover relative`,
])
export const ImageDivBackground64 = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 lg:h-128 mt-5 mx-2 bg-contain bg-center bg-no-repeat transition duration-700 `,
])

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  ${tw`absolute inset-0 flex justify-center items-center`}
`
const CardContent = tw.p``
const CardTitle = tw.h5`text-3xl uppercase text-diariolaranja font-bold
`
// font-bold text-xl uppercase text-center pt-5 pl-6 pb-3

const CardText = tw.div`p-4 text-white`

export default ({ index, imageSrc, title, content, url = '#' }) => {
  console.log(imageSrc)

  return (
    <CardContainer key={index}>
      <Card
        className="group"
        href={url}
        initial="rest"
        whileHover="hover"
        animate="rest"
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
              </CardText>
            </CardContent>
          </CardHoverOverlay>
        </CardImageContainer>
      </Card>
    </CardContainer>
  )
}
