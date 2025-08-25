import React, { useEffect, useRef } from "react"

const Vortex = ({
    particleCount = 40, // fewer particles for clarity
    backgroundColor = "transparent",
    colors = ["#ff00a6", "#0041d9"],
}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        let particles = []

        const resizeCanvas = () => {
            const nav = document.querySelector("nav") // match navbar area
            if (nav) {
                canvas.width = nav.offsetWidth
                canvas.height = nav.offsetHeight
            }
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1.5, // small dots
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.01 + 0.002,
                color: colors[Math.floor(Math.random() * colors.length)],
            })
        }

        const animate = () => {
            // clear each frame (important to avoid ribbons)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p) => {
                // update position
                p.x += Math.cos(p.angle) * 0.5
                p.y += Math.sin(p.angle) * 0.5
                p.angle += p.speed

                // wrap around edges
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                // draw glowing dot
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.shadowBlur = 12
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
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        />
    )
}

export default Vortex
