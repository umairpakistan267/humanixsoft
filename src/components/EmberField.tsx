import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../motion'
import { useTheme } from './ThemeProvider'

function toRgba(spaceRgb: string, alpha: number) {
  const [r, g, b] = spaceRgb.trim().split(/\s+/).map(Number)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()
  const { theme } = useTheme()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const sparks = Array.from({ length: 52 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.7 + 0.35,
      s: Math.random() * 0.42 + 0.1,
      a: Math.random() * 0.55 + 0.12,
      drift: Math.random() * 6,
    }))

    let frame = 0
    let width = 0
    let height = 0
    const styles = getComputedStyle(document.documentElement)
    const glow = styles.getPropertyValue('--glow')
    const glow2 = styles.getPropertyValue('--glow-2')

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const box = parent.getBoundingClientRect()
      width = box.width
      height = box.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (const spark of sparks) {
        spark.y -= spark.s * 0.0038
        spark.x += Math.sin(spark.y * spark.drift) * 0.0009
        if (spark.y < -0.04) {
          spark.y = 1.04
          spark.x = Math.random()
        }
        const gx = spark.x * width
        const gy = spark.y * height
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, spark.r * 7)
        grad.addColorStop(0, toRgba(glow2, spark.a))
        grad.addColorStop(1, toRgba(glow, 0))
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(gx, gy, spark.r * 7, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = toRgba(glow2, Math.min(1, spark.a + 0.2))
        ctx.beginPath()
        ctx.arc(gx, gy, spark.r, 0, Math.PI * 2)
        ctx.fill()
      }
      frame = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [reduced, theme])

  if (reduced) return null

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
}
