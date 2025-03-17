import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = canvas.clientHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create data points for the fitness chart with more variation
    const dataPoints = [
      { x: 0, y: 35 },
      { x: 1, y: 40 },
      { x: 2, y: 43 },
      { x: 3, y: 50 },
      { x: 4, y: 48 },
      { x: 5, y: 45 },
      { x: 6, y: 44 },
      { x: 7, y: 39 },
      { x: 8, y: 43 },
      { x: 9, y: 35 },
      { x: 10, y: 25 },
    ]

    // Animation variables
    let animationFrame
    let progress = 0

    // Draw the chart
    const drawChart = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const padding = 40

      // Calculate chart dimensions
      const chartWidth = width - padding * 2
      const chartHeight = height - padding * 2

      // Draw animated background
      const time = Date.now() * 0.001
      for (let i = 0; i < 5; i++) {
        const size = 50 + i * 20
        const x = width / 2 + Math.cos(time * (0.2 + i * 0.1)) * size
        const y = height / 2 + Math.sin(time * (0.3 + i * 0.1)) * size

        ctx.beginPath()
        ctx.arc(x, y, 20 + i * 10, 0, Math.PI * 2)

        // Use different colors for light/dark mode
        const isDarkMode = document.documentElement.classList.contains("dark")
        const alpha = isDarkMode ? 0.03 : 0.05

        if (i % 2 === 0) {
          ctx.fillStyle = `rgba(37, 99, 235, ${alpha})` // Blue
        } else {
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})` // Purple
        }
        ctx.fill()
      }

      // Draw grid lines (without hover animation)
      const gridOpacity = 0.1
      const gridColor = "rgba(148, 163, 184, "

      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i

        ctx.beginPath()
        ctx.strokeStyle = `${gridColor}${gridOpacity})`
        ctx.lineWidth = 1

        // Draw straight line
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i <= 10; i++) {
        const x = padding + (chartWidth / 10) * i

        ctx.beginPath()
        ctx.strokeStyle = `${gridColor}${gridOpacity})`
        ctx.lineWidth = 1

        // Draw straight line
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - padding)
        ctx.stroke()
      }

      // Set initial progress to 1 to show all data points immediately
      if (progress < 0.2) {
        progress = 0.2
      }

      // Draw line chart
      ctx.strokeStyle = "hsl(var(--primary))"
      ctx.lineWidth = 3
      ctx.beginPath()

      // Calculate the number of points to draw based on animation progress
      const pointsToDraw = Math.floor(dataPoints.length * progress)

      // Use bezier curves for smoother, more natural lines
      if (pointsToDraw > 1) {
        ctx.moveTo(
            padding + (chartWidth / 10) * dataPoints[0].x,
            padding + chartHeight - (chartHeight / 50) * dataPoints[0].y,
        )

        for (let i = 0; i < pointsToDraw - 1; i++) {
          const current = dataPoints[i]
          const next = dataPoints[i + 1]

          const currentX = padding + (chartWidth / 10) * current.x
          const currentY = padding + chartHeight - (chartHeight / 50) * current.y

          const nextX = padding + (chartWidth / 10) * next.x
          const nextY = padding + chartHeight - (chartHeight / 50) * next.y

          // Control points for the bezier curve
          const cpX1 = currentX + (nextX - currentX) / 3
          const cpY1 = currentY
          const cpX2 = nextX - (nextX - currentX) / 3
          const cpY2 = nextY

          ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, nextX, nextY)
        }
      }

      ctx.stroke()

      // Draw gradient area under the line
      if (pointsToDraw > 1) {
        const lastPoint = dataPoints[pointsToDraw - 1]
        const lastX = padding + (chartWidth / 10) * lastPoint.x
        const lastY = padding + chartHeight - (chartHeight / 50) * lastPoint.y

        ctx.lineTo(lastX, height - padding)
        ctx.lineTo(padding, height - padding)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)

        // Check if dark mode is active
        const isDarkMode = document.documentElement.classList.contains("dark")

        if (isDarkMode) {
          gradient.addColorStop(0, "rgba(37, 99, 235, 0.15)")
          gradient.addColorStop(1, "rgba(37, 99, 235, 0)")
        } else {
          gradient.addColorStop(0, "rgba(37, 99, 235, 0.25)")
          gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.15)")
          gradient.addColorStop(1, "rgba(37, 99, 235, 0)")
        }

        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Draw data points with pulse effect
      for (let i = 0; i < pointsToDraw; i++) {
        const point = dataPoints[i]
        const x = padding + (chartWidth / 10) * point.x
        const y = padding + chartHeight - (chartHeight / 50) * point.y

        // Pulse effect
        const pulse = Math.sin(time * 3) * 0.5 + 1.5
        const pointSize = 5

        ctx.beginPath()
        ctx.arc(x, y, pointSize, 0, Math.PI * 2)

        // Gradient fill for points
        const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, pointSize)

        if (document.documentElement.classList.contains("dark")) {
          pointGradient.addColorStop(0, "rgba(37, 99, 235, 1)")
          pointGradient.addColorStop(1, "rgba(37, 99, 235, 0.8)")
        } else {
          // More colorful points in light mode
          if (i % 3 === 0) {
            pointGradient.addColorStop(0, "rgba(37, 99, 235, 1)")
            pointGradient.addColorStop(1, "rgba(37, 99, 235, 0.8)")
          } else if (i % 3 === 1) {
            pointGradient.addColorStop(0, "rgba(168, 85, 247, 1)")
            pointGradient.addColorStop(1, "rgba(168, 85, 247, 0.8)")
          } else {
            pointGradient.addColorStop(0, "rgba(236, 72, 153, 1)")
            pointGradient.addColorStop(1, "rgba(236, 72, 153, 0.8)")
          }
        }

        ctx.fillStyle = pointGradient
        ctx.fill()
        ctx.strokeStyle = "white"
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Animate
      if (progress < 1) {
        progress += 0.01
      }

      animationFrame = requestAnimationFrame(drawChart)
    }

    // Start animation
    animationFrame = requestAnimationFrame(drawChart)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-[600px] aspect-[4/3]"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/5 shadow-xl">
          <canvas ref={canvasRef} className="h-full w-full rounded-2xl" />
        </div>
        <motion.div
            className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/80 dark:bg-background/60 p-4 backdrop-blur-sm"
            transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-sm font-medium">Weight Progress</div>
          <div className="mt-1 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            -45 lbs
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Last 10 weeks</div>
        </motion.div>

        {/* Interactive elements */}
        <motion.div
            className="absolute top-4 right-4 bg-background/80 dark:bg-background/60 rounded-full p-2 backdrop-blur-sm cursor-pointer"
            whileTap={{ scale: 0.95 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L12 2L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M9 19L12 22L15 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
  )
}