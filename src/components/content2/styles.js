import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  SectionHeading,
  PrimaryLink as PrimaryLinkBase,
  PrimaryButton as PrimaryButtonBase,
} from '../misc.js'

export const Container = tw.div`relative`
export const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

export const ThreeColumn = tw.div`flex flex-wrap`
export const Column = tw.div`xl:mr-12 xl:last:mr-0`
export const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
])

export const CardColumn = tw(Column)`

w-full 
sm:w-1/2 
md:w-1/2 
lg:w-1/3
xl:w-1/3
mt-16 
`
export const Card = tw.div`
mx-auto
`

export const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`
export const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`
export const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`
export const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`

export const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
])

export const CardText = tw.div`mt-4`

export const CardHeader = tw.div`flex justify-between items-center`
export const CardCompany = tw.div`text-primary-500 font-bold text-lg`
export const CardType = tw.div`font-semibold text-sm text-gray-600`

export const CardTitle = tw.h5`text-xl mt-4 font-bold`

export const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`

export const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`
export const CardAction = tw(PrimaryButtonBase)`w-full mt-6`
