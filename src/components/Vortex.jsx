import React, { useEffect, useRef } from "react"

const Vortex = ({
    particleCount = 50,
    backgroundColor = "white",
    colors = ["#f228abff", "#00ccff"], // green-blue glow
}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        let particles = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 3 + 2,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.02 + 0.005,
                color: colors[Math.floor(Math.random() * colors.length)],
            })
        }

        const animate = () => {
            ctx.fillStyle = backgroundColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p) => {
                // Vortex motion
                p.x += Math.sin(p.angle) * 2
                p.y += Math.cos(p.angle) * 2
                p.angle += p.speed

                // Draw glowing particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.shadowBlur = 10
                ctx.shadowColor = p.color
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()
        return () => window.removeEventListener("resize", resizeCanvas)
    }, [particleCount, backgroundColor, colors])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute", // relative to parent
                top: 0,
                left: 0,
                width: "100%", // full width of parent
                height: "100%", // full height of parent
                zIndex: -1,
            }}
        />
    )
}

export default Vortex
