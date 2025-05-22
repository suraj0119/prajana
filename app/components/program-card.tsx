import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgramCardProps {
  title: string
  image: string
  color: string
}

export function ProgramCard({ title, image, color }: ProgramCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={cn("absolute inset-0 transition-opacity duration-300", color)}></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <h3 className="font-poppins mb-8 text-2xl font-bold">{title}</h3>
        <button className="mt-auto flex items-center gap-2 rounded-sm bg-black/20 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-black/30 hover:shadow-lg">
          READ MORE
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
