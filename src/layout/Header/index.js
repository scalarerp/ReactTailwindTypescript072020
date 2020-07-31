import React from 'react'
import tw from 'twin.macro'
import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js'
import useHideInScrolled from '../../helpers/useHideInScrolled.js'
import {
  LinksRow,
  LinksCol,
  LogoLinks,
  BurgerMenuToogle,
} from '../HeaderNavLinks'

import {
  Container,
  DesktopNavLinks,
  MobileNavLinksContainer,
  MobileNavLinks,
} from './styles'

const Header = ({ collapseBreakpointClass = 'lg' }) => {
  const { topPosition } = useHideInScrolled()
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass]

  const navBackColorClass =
    topPosition === '0'
      ? 'bg-transparent h-32 px-5 py-2  '
      : 'shadow-md bg-theme-nav-background h-24 px-0 py-2  '
  // style={{ top: topPosition }}
  return (
    <>
      <Container className={navBackColorClass}>
        <LogoLinks topPosition={topPosition} className="flex-1" />

        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          <LinksRow />
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          <MobileNavLinks
            initial={{ x: '150%', display: 'none' }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            <LinksCol />
          </MobileNavLinks>
        </MobileNavLinksContainer>
        <div
          onClick={toggleNavbar}
          className="right-0 z-20"
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          <BurgerMenuToogle show={showNavLinks} />
        </div>
      </Container>
    </>
  )
}

const collapseBreakPointCssMap = {
  sm: {
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinks: tw`sm:hidden`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    desktopNavLinks: tw`md:flex`,
    mobileNavLinks: tw`md:hidden`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinks: tw`lg:hidden`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinks: tw`lg:hidden`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
}

export default Header
