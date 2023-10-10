import { useEffect, useState } from 'react'

const useDimension = () => {
  const [dimension, setDimension] = useState({ height: 0, width: 0 })

  const updateDimension = () => {
    const { innerHeight: height, innerWidth: width } = window
    setDimension({ height, width })
  }

  useEffect(() => {
    updateDimension()
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  }, [])

  return dimension
}

export default useDimension
