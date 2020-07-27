import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = tw.header`
top-0 left-0 z-10 fixed 
flex items-center justify-between
w-screen  mx-auto
px-5 py-2  h-32 
duration-700 shadow-md
bg-theme-nav-background  
`
export const DesktopNavLinks = tw.nav`
hidden lg:flex flex-1 justify-end `

export const MobileNavLinksContainer = tw.nav`
 items-center justify-between`

export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0  p-8
  text-center text-gray-900 bg-primary-500`}
`)
