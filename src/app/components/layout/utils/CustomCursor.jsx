"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export default function CustomCursor() {
  // Motion Values für Mausposition
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Beispiel: Optional kannst du relative Offsets oder Scale hinzuziehen
  const cursorX = useTransform(mouseX, (x) => x - 16) // angenommen, der Cursor ist 32px breit
  const cursorY = useTransform(mouseY, (y) => y - 16)

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="hidden sm:block custom-cursor"
      style={{
        x: cursorX,
        y: cursorY,
        width: 32,
        height: 32,
        // Du kannst hier weitere styles wie opacity oder scale hinzufügen
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="cursor-inner" />
    </motion.div>
  )
}