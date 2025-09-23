import React, { useRef, useEffect, useState } from "react"

const VisionScrollFromRight = ({ images = [], speed = 2 }) => {
    const trackRef = useRef(null)
    const positionRef = useRef(0) // position persists even on re-renders
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const track = trackRef.current
        const duplicatedImages = [...images, ...images] // duplicate for seamless scroll

        let animationFrame

        const animate = () => {
            if (!isPaused) {
                positionRef.current -= speed
                const resetPoint = (track.scrollWidth / 2) * -1
                if (positionRef.current <= resetPoint) {
                    positionRef.current = 0
                }
                track.style.transform = `translateX(${positionRef.current}px)`
            }
            animationFrame = requestAnimationFrame(animate)
        }

        animate()
        return () => cancelAnimationFrame(animationFrame)
    }, [images, speed, isPaused])

    return (
        <div className="vision-pics rounded-4 mb-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{ overflow: "hidden", width: "100%", position: "relative" }}>
            <div className="scroll-track" ref={trackRef} style={{ display: "flex", gap: "20px" }}>
                {[...images, ...images].map((img, index) => (
                    <img
                        src={img}
                        key={index}
                        alt=""
                        style={{
                            height: "200px",
                            flexShrink: 0,
                            borderRadius: "20px",
                            boxShadow: "0px 0px 8px rgba(0,0,0,0.93)",
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default VisionScrollFromRight
