import { useState, useEffect } from 'react'

export default function useHideInScrolled() {
  const [topPosition, setTopPosition] = useState('0px')
  const [prevScrollpos, setPrevScrollpos] = useState()
  const [currentScrollpos, setCurrentScrollpos] = useState()

  const windowOnscroll = () => {
    // console.log(window.pageYOffset)
    setCurrentScrollpos(window.pageYOffset)
    prevScrollpos > currentScrollpos
      ? setTopPosition('0px')
      : setTopPosition('-150px')
    setPrevScrollpos(currentScrollpos)
  }

  useEffect(() => {
    window.addEventListener('scroll', windowOnscroll)
    return () => {
      window.removeEventListener('scroll', windowOnscroll)
    }
  })

  return { topPosition }
}
