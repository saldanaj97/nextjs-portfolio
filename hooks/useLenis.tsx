/* eslint-disable no-unused-vars */
import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react'

function useLenis(
  lenisSettings:
    | {
        wrapper?: HTMLElement | Window | undefined
        content?: HTMLElement | undefined
        wheelEventsTarget?: HTMLElement | Window | undefined
        eventsTarget?: HTMLElement | Window | undefined
        smoothWheel?: boolean | undefined
        smoothTouch?: boolean | undefined
        syncTouch?: boolean | undefined
        syncTouchLerp?: number | undefined
        __iosNoInertiaSyncTouchLerp?: number | undefined
        touchInertiaMultiplier?: number | undefined
        duration?: number | undefined
        easing?: ((t: number) => number) | undefined
        lerp?: number | undefined
        infinite?: boolean | undefined
        orientation?: 'vertical' | 'horizontal' | undefined
        gestureOrientation?: 'vertical' | 'horizontal' | 'both' | undefined
        touchMultiplier?: number | undefined
        wheelMultiplier?: number | undefined
        normalizeWheel?: boolean | undefined
        autoResize?: boolean | undefined
      }
    | undefined,
) {
  const [lenis, setLenis] = useState<Lenis>(new Lenis(lenisSettings))

  useEffect(() => {
    const updateLenisRef = () => {
      const lenis = new Lenis(lenisSettings)
      setLenis(lenis)
    }

    function raf(time: number) {
      updateLenisRef()
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    lenis,
  }
}

export default useLenis
