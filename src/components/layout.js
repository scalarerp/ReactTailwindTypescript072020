import React from 'react'
import tw from 'twin.macro'
import AnimationRevealPage from '../helpers/AnimationRevealPage'
import Header from './Header'
import Hero from './hero'
import Content1 from './content1'
import Content2 from './content2'
import Content3 from './content3'
import Content4 from './content4'
import Footer from './footer'

export const Container = tw.div`
   bg-theme-page-background 
   text-theme-text-content 
   font-sans   w-screen
`
export default (props) => {
  return (
    <>
      {/* <VideoBg /> */}
      <Container>
        <Header />
        <Hero />
        <AnimationRevealPage>
          <Content1 />
          <Content2 />
          <Content3 />
          <Content4 />
          <Footer />
          {/* <Content5 /> */}
        </AnimationRevealPage>
      </Container>
    </>
  )
}
