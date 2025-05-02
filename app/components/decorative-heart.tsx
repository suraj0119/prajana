interface DecorativeHeartProps {
  className?: string
  direction?: "left" | "right"
}

export function DecorativeHeart({ className = "", direction = "left" }: DecorativeHeartProps) {
  return (
    <div className={className}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === "right" ? "scale-x-[-1]" : ""}
      >
        {/* Hand */}
        <path
          d="M40 70C40 70 45 65 50 60C55 55 60 45 60 40C60 35 55 30 50 30C45 30 40 35 40 40C40 45 45 50 45 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-gray-200"
        />
        {/* Heart */}
        <path
          d="M45 25C45 25 50 20 55 20C60 20 65 25 65 30C65 35 60 40 55 45C50 40 45 35 45 30C45 25 45 25 45 25Z"
          fill="currentColor"
          className="fill-accent-pink"
        />
      </svg>
    </div>
  )
}
