"use client"

import { cn } from "@/lib/utils"
import { useId } from "react"
import type React from "react"
import { useEffect, useState } from "react"

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  squareSize?: number
  gridGap?: number
  color?: string
  className?: string
  strokeDasharray?: string
  maskClassName?: string
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  width = 20,
  height = 20,
  squareSize = 4,
  gridGap = 6,
  color = "rgb(0, 0, 0)",
  className,
  strokeDasharray = "0",
  maskClassName,
  ...props
}) => {
  const patternId = useId()
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setOffset(prev => ({
        x: prev.x + 0.2,
        y: prev.y + 0.2
      }))
    }, 50)
    return () => clearInterval(moveInterval)
  }, [])

  return (
    <div className={cn("relative size-full overflow-hidden", className)} {...props}>
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
          maskClassName
        )}
      >
        <defs>
          <pattern
            id={patternId}
            width={squareSize + gridGap}
            height={squareSize + gridGap}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${offset.x} ${offset.y})`}
            x={-1}
            y={-1}
          >
            <path
              d={`M.5 ${squareSize + gridGap}V.5H${squareSize + gridGap}`}
              fill="none"
              strokeDasharray={strokeDasharray}
              className="transition-all duration-300"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

