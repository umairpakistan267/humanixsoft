import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ease } from '../motion'

type Props = {
  amount: number
  suffix?: string
  className?: string
}

export function CountUp({ amount, suffix = '', className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const value = useMotionValue(0)
  const rounded = useTransform(value, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on('change', setDisplay)
    return unsubscribe
  }, [rounded])

  useEffect(() => {
    if (!inView) return
    const controls = animate(value, amount, { duration: 1.7, ease })
    return () => controls.stop()
  }, [inView, amount, value])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
