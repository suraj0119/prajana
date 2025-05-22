"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/images/children-activity.jpg",
    alt: "Children participating in group activities",
    category: "Education",
  },
  {
    id: 2,
    src: "/images/classroom-learning.jpg",
    alt: "Children in a classroom setting",
    category: "Education",
  },
  {
    id: 3,
    src: "/images/community-celebration.jpg",
    alt: "Community celebration event",
    category: "Events",
  },
  {
    id: 4,
    src: "/images/volunteer-teaching.jpg",
    alt: "Volunteer teaching children",
    category: "Volunteering",
  },
  {
    id: 5,
    src: "/images/children-group.jpg",
    alt: "Group of children smiling",
    category: "Community",
  },
  {
    id: 6,
    src: "/images/teaching-session.jpg",
    alt: "Teaching session with children",
    category: "Education",
  },
  {
    id: 7,
    src: "/images/volunteer-event.jpg",
    alt: "Volunteers at a community event",
    category: "Events",
  },
  {
    id: 8,
    src: "/images/children-craft-activity.jpg",
    alt: "Children engaged in craft activities",
    category: "Activities",
  },
  {
    id: 9,
    src: "/images/koshish-celebration.jpg",
    alt: "Celebration at Koshish center",
    category: "Events",
  },
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <div>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full transition-transform group-hover:translate-y-0">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedImage && (
              <div className="relative h-[80vh] w-full max-h-[80vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <p className="text-white">{selectedImage.alt}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
