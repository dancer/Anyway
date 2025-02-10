"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import type React from "react" // Added import for React

interface BoxRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  boxColor?: string
  duration?: number
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#1a1a1a",
  duration = 0.5,
}: BoxRevealProps) => {
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible")
      mainControls.start("visible")
    } else {
      slideControls.start("hidden")
      mainControls.start("hidden")
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  )
}

