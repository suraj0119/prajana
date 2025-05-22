import Image from "next/image"
// Import the typography components
import { Title, Paragraph } from "./typography"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden mt-0">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover object-center brightness-75"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="absolute inset-0 flex items-center justify-center px-4 pt-[60px] md:pt-[70px]">
        <div className="text-center text-white max-w-4xl">
          <Title className="mb-2 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">{title}</Title>
          <Paragraph className="mx-auto max-w-2xl drop-shadow-md text-white/90 text-sm sm:text-base md:text-lg">
            {subtitle}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
