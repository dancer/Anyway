import type { ComponentPropsWithoutRef, CSSProperties, FC } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"div"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group rounded-full border border-black/10 bg-cream-light text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-cream-dark",
        className,
      )}
      {...props}
    >
      <span
        style={
          {
            "--shiny-width": `${shimmerWidth}px`,
          } as CSSProperties
        }
        className={cn(
          "inline-flex items-center justify-center px-4 py-1",
          "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
          "bg-gradient-to-r from-transparent via-black/60 via-50% to-transparent",
          "transition ease-out hover:text-black/80 hover:duration-300",
        )}
      >
        {children}
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </span>
    </div>
  )
}

