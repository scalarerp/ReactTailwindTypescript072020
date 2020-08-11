import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const NavLinks = tw.div``

const NavLink = tw(Link)`
  text-xl uppercase my-2 lg:mx-6 lg:my-0 h-10
  font-semibold tracking-wide 
  transition duration-700
  pb-1 border-b-2 border-transparent
  text-white
  hover:border-yellow-500
  hocus:text-yellow-500
`
const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black 
  border-b-0 text-2xl! ml-0!`};
`
export const WhatsAppLink = tw.a` 
mr-5
sm:mr-0
text-xl uppercase
bg-whatsapp 
hover:bg-diariolaranja 
hocus:text-white
text-white 
font-bold 
py-2 px-4 
rounded 
inline-flex 
justify-center
items-center
text-center
`

const LinksNav = () => (
  <>
    <NavLink
      to="inicio"
      href="#inicio"
      spy={true}
      smooth={true}
      duration={1000}
    >
      Início
    </NavLink>
    <NavLink
      to="servicos"
      href="#servicos"
      spy={true}
      smooth={true}
      duration={1000}
    >
      Serviços
    </NavLink>
    <NavLink
      to="portfolio"
      href="#portfolio"
      spy={true}
      smooth={true}
      duration={1000}
    >
      Portfólio
    </NavLink>
    <NavLink
      to="contato"
      href="#contato"
      spy={true}
      smooth={true}
      duration={1000}
    >
      Contato
    </NavLink>

    <WhatsAppLink
      href="https://api.whatsapp.com/send?phone=555199961716"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiWhatsappLine className="icon" />
      <span>Chama no Whats</span>
    </WhatsAppLink>
  </>
)
export const LinksRow = () => {
  return (
    <NavLinks>
      <LinksNav />
    </NavLinks>
  )
}
export const LinksCol = () => {
  return (
    <NavLinks className="flex flex-col">
      <LinksNav />
    </NavLinks>
  )
}

export const LogoLinks = (props) => {
  const LogoH =
    props.topPosition === '0'
      ? 'w-40 -ml-8 duration-700 '
      : 'w-20 duration-700 '
  return (
    <div>
      <LogoLink to="inicio" href="/">
        <Logo className={LogoH} />
        <div className="flex flex-col ">
          <span className="shadow-text-logo text-1rem ">Agência</span>
          <div
            className="-mt-3
            text-2rem 
            shadow-text-logo 
            inline-flex 
            "
          >
            <span className="mr-2">O</span>
            <span>Diário</span>
          </div>
        </div>
      </LogoLink>
    </div>
  )
}

const NavToggleButton = tw.button`
  lg:hidden  focus:outline-none
  h-20 w-20
  fixed top-0 right-0
  hocus:text-primary-900
  transition duration-700
`
export const BurgerMenuToogle = (props) => {
  return (
    <NavToggleButton>
      {props.show ? (
        <FiX className="w-12 h-12 text-diariolaranja " />
      ) : (
        <FiMenu className="w-12 h-12 text-diariolaranja" />
      )}
    </NavToggleButton>
  )
}
