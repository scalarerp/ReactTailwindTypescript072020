import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line

export const Container = tw.div`relative`
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto pt-10 pb-6 `

export const ContentCard = tw.div`flex flex-col h-full bg-gray-200`
// export const Columns = tw.div`flex flex-wrap
// overflow-hidden md:-mx-2 lg:-mx-4`

// export const Column = tw.div`
// w-full overflow-hidden  m-2
// md:my-5 md:px-10 md:w-1/2
// lg:my-4 `

export const OpacityOverlay = tw.div`z-2 absolute inset-0 bg-gray-900 opacity-50`

export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`
export const Subheading = tw.h5`font-bold text-primary-500 text-center md:text-left`

export const Title = tw.div`font-bold text-xl font-panton uppercase text-center p-2 sm:pt-5 sm:pl-6 sm:pb-3 `
export const TextContent = tw.div`lg:py-8 text-center  md:text-left`
export const Heading = tw(SectionHeading)`
mt-4 font-black text-left text-3xl 
sm:text-4xl 
lg:text-5xl text-center 
md:text-left leading-tight`

export const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-800`

export const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
])

export const ImageDivBackground12 = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-12 mt-5 bg-contain bg-center bg-no-repeat `,
])

export const ImageDivBackground64 = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 mx-2 bg-contain bg-center bg-no-repeat transition duration-700 `,
])

export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`
export const PrimaryLink = tw.a`cursor-pointer font-bold text-primary-500 border-b-2 border-transparent hocus:border-primary-500 hocus:text-primary-800 transition duration-300`

export const PrimaryButton8 = styled(PrimaryButton)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
])

export const SaibaMais = (props) => {
  const defaultText = (
    <>
      <span>Saiba </span>
      <span className="ml-1">Mais</span>
    </>
  )

  return (
    <button
      onClick={props.onClick}
      type="button"
      className="w-1/2 inline-flex justify-center
  text-center text-sm font-semibold text-white
  bg-primary-400 rounded-full
  px-3 py-1
  lg:px-4 lg:py-2  lg:text-xl
  transition duration-500 ease-in-out
  hover:bg-diariolaranja uppercase
  transform hover:-translate-y-1 hover:scale-110
  "
    >
      {props.children || defaultText}
    </button>
  )
}

export const Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
}
