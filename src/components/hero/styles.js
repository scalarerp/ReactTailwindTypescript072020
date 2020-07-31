import tw from 'twin.macro'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import Azul from '../../assets/images/11.png'

export const Container = styled.div`
  ${tw`relative bg-center bg-cover -z-2`}
  background-image: url(${Azul});
  background-repeat: no-repeat;
  background-attachment: fixed;

`

//
// background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");

export const HeroContainer = tw.div`
relative px-4  z-5 pb-40
sm:px-8 max-w-screen-xl mx-auto`

export const TwoColumn = tw.div`
flex justify-between items-center 
flex-col 
md:flex-row`

export const LeftColumn = tw.div`
flex flex-col items-center 
md:px-10
lg:block`

export const RightColumn = tw.div`
w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`

export const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left 
  sm:text-4xl lg:text-5xl xl:text-6xl 
  font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`
export const SlantedBackground = styled.span`
  ${tw`relative text-gray-900 px-4 -mx-4 py-2`}
  &::before {
    content: '';
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-2`}
  }
`
export const Notification = tw.span`
inline-block my-4 pl-3 py-1 text-gray-100 
border-l-4 border-blue-500 font-medium text-lg`

export const PrimaryAction = tw.button`
px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 
sm:px-8 sm:py-4 bg-gray-100 text-primary-500 
font-bold rounded shadow 
transition duration-500 
z-20
transform hover:-translate-y-1 hover:scale-110
focus:bg-primary-500 
focus:text-gray-100 
focus:shadow-outline`
