import { useState, useEffect } from 'react'

export default function useHideInScrolled() {
  const [topPosition, setTopPosition] = useState('0')
  // const [prevScrollpos, setPrevScrollpos] = useState()
  // const [currentScrollpos, setCurrentScrollpos] = useState()

  const windowOnscroll = () => {
    window.pageYOffset === 0 ? setTopPosition('0') : setTopPosition('1')
    // setCurrentScrollpos(window.pageYOffset)
    // if (prevScrollpos > currentScrollpos) {
    //   setTopPosition('0')
    // } else {
    //   setTopPosition('1')
    // }
    // setPrevScrollpos(currentScrollpos)
  }

  useEffect(() => {
    window.addEventListener('scroll', windowOnscroll)
    return () => {
      window.removeEventListener('scroll', windowOnscroll)
    }
  })

  return { topPosition }
}
