import { Heart, Lightbulb, SmileIcon, HandHeart } from "lucide-react"

interface ValueCardProps {
  icon: "hope" | "prayers" | "peace" | "donation"
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "hope":
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-110">
            <Lightbulb className="h-6 w-6 text-[#40E0D0]" />
          </div>
        )
      case "prayers":
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-110">
            <Heart className="h-6 w-6 text-[#FF6F61]" />
          </div>
        )
      case "peace":
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-110">
            <SmileIcon className="h-6 w-6 text-[#FFB347]" />
          </div>
        )
      case "donation":
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-110">
            <HandHeart className="h-6 w-6 text-[#40E0D0]" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{renderIcon()}</div>
      <h3 className="font-poppins mb-2 text-lg font-bold text-[#191970]">{title}</h3>
      <p className="font-raleway text-sm text-gray-500">{description}</p>
    </div>
  )
}
