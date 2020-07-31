import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const NavLinks = tw.div`inline-block`
const NavLink = tw.a`
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

const LinksNav = () => (
  <>
    <NavLink href="#inicio">Inicio</NavLink>
    <NavLink href="#servicos">Serviços</NavLink>
    <NavLink href="#portfolio">Portfolio</NavLink>
    <NavLink href="#contato">Contato</NavLink>
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
    props.topPosition === '0' ? 'w-40 duration-700 ' : 'w-20 duration-700 '
  return (
    <div>
      <LogoLink href="/">
        <Logo className={LogoH} />
        <div className="flex flex-col ">
          <span className="shadow-text-logo ">Agência</span>
          <span className="text-4xl shadow-text-logo -mt-3">Diário</span>
        </div>
      </LogoLink>
    </div>
  )
}

const NavToggleButton = tw.button`
  lg:hidden  focus:outline-none
  h-20 w-20
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
