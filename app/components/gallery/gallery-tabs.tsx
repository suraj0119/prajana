"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhotoGallery } from "./photo-gallery"
import { VideoGallery } from "./video-gallery"
import { TestimonialGallery } from "./testimonial-gallery"
import { DecorativeHeart } from "../decorative-heart"

export function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("photos")

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
      </div>

      <Tabs defaultValue="photos" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="photos" className="text-sm md:text-base">
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-sm md:text-base">
              Videos
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="text-sm md:text-base">
              Testimonials
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="photos" className="mt-0">
          <PhotoGallery />
        </TabsContent>

        <TabsContent value="videos" className="mt-0">
          <VideoGallery />
        </TabsContent>

        <TabsContent value="testimonials" className="mt-0">
          <TestimonialGallery />
        </TabsContent>
      </Tabs>
    </div>
  )
}
