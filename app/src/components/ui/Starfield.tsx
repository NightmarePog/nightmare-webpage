'use client'

import { useEffect, useRef } from 'react'

interface Props {
  speedFactor?: number
  backgroundColor?: string
  starColor?: [number, number, number]
  starCount?: number
}

export default function Starfield({
  speedFactor = 0.05,
  backgroundColor = 'black',
  starColor = [255, 255, 255],
  starCount = 5000,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
const animationRef = useRef<number | null>(null)
  const starsRef = useRef<{ x: number; y: number; z: number }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.error('Could not get 2d context from canvas element')
      return
    }

    let w = window.innerWidth
    let h = window.innerHeight

    const setCanvasExtents = () => {
      canvas.width = w
      canvas.height = h
    }
    setCanvasExtents()

    const makeStars = (count: number) =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      }))

    starsRef.current = makeStars(starCount)

    const clear = () => {
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const putPixel = (x: number, y: number, brightness: number) => {
      ctx.fillStyle = `rgba(${starColor[0]},${starColor[1]},${starColor[2]},${brightness})`
      ctx.fillRect(x, y, 1, 1)
    }

    const moveStars = (distance: number) => {
      for (const s of starsRef.current) {
        s.z -= distance
        while (s.z <= 1) s.z += 1000
      }
    }

    let prevTime = performance.now()
    const tick = (time: number) => {
      const elapsed = time - prevTime
      prevTime = time

      moveStars(elapsed * speedFactor)
      clear()

      const cx = w / 2
      const cy = h / 2

      for (const star of starsRef.current) {
        const x = cx + star.x / (star.z * 0.001)
        const y = cy + star.y / (star.z * 0.001)

        if (x < 0 || x >= w || y < 0 || y >= h) continue

        const d = star.z / 1000.0
        const b = 1 - d * d
        putPixel(x, y, b)
      }

      animationRef.current = requestAnimationFrame(tick)
    }

    animationRef.current = requestAnimationFrame(tick)

    const handleResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      setCanvasExtents()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [starColor, backgroundColor, speedFactor, starCount])

  return (
  <canvas
    ref={canvasRef}
    className="fixed -z-10 inset-0 p-0 m-0 pointer-events-none"
  />
  )
}
