import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = tw.header`
top-0 left-0 z-10 fixed 
flex items-center justify-between
w-screen  
duration-700 
`
export const DesktopNavLinks = tw.nav`
hidden lg:flex flex-row justify-end`

export const MobileNavLinksContainer = tw.nav`
 items-center justify-between`

export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0  p-8
  text-center text-gray-900 bg-primary-500`}
`)
