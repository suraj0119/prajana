"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Play } from "lucide-react"

// Updated video data with the two new videos added
const videos = [
  {
    id: 1,
    title: "SAFETY of Girls & Women - PRAJNA FOUNDATION Koshish",
    description: "Safety of girls: Threat, cause, prevention and solutions by Shubhangi Gupta.",
    videoId: "KJa1q-8yfE4",
    source: "youtube",
  },
  {
    id: 2,
    title: "ISHQ SUFIYANA by R K Sinha & Supriya Joshi - DD News coverage",
    description:
      "DD News coverage of a successful and widely acclaimed event for quality and excellence. Concept & Design: R K Sinha & Supriya Joshi for PRAJNA FOUNDATION.",
    videoId: "c-UgqrdYCaU",
    source: "youtube",
  },
  {
    id: 3,
    title: "Prajna Foundation - Koshish",
    description:
      "Prajna Foundation's Koshish program focuses on education and development for underprivileged children.",
    videoId: "F36Waffxyrw",
    source: "youtube",
  },
  {
    id: 4,
    title: "Prajna Foundation - Naaree Shakti",
    description: "Empowering women through vocational training and skill development initiatives.",
    videoId: "qz4dNxeJ8Rc",
    source: "youtube",
  },
  {
    id: 5,
    title: "Prajna Foundation - Refugee Support",
    description: "Supporting refugee families with essential services and integration programs.",
    videoId: "nrK5hLeaf7I",
    source: "youtube",
  },
  {
    id: 6,
    title: "Prajna Foundation - Cultural Empowerment",
    description: "Preserving cultural heritage and traditions through community engagement programs.",
    videoId: "b5BXYa7Ecqo",
    source: "youtube",
  },
  {
    id: 7,
    title: "Prajna Foundation Annual Day Celebration",
    description: "Highlights from our annual celebration showcasing achievements and community impact.",
    videoId: "LplolhAH5fI",
    source: "youtube",
  },
  {
    id: 8,
    title: "Volunteer Testimonials - Prajna Foundation",
    description: "Volunteers share their experiences and the impact of their work with Prajna Foundation.",
    videoId: "d416cGloMkI",
    source: "youtube",
  },
  {
    id: 9,
    title: "Children's Education Program - Impact Stories",
    description: "Real stories of how our education initiatives are changing children's lives.",
    videoId: "RUUfpaQUq3o",
    source: "youtube",
  },
  {
    id: 10,
    title: "Community Outreach Initiative - Prajna Foundation",
    description: "Our community outreach programs bringing positive change to underserved areas.",
    videoId: "TY9IcPOvgvE",
    source: "youtube",
  },
  {
    id: 11,
    title: "Koshish Program - Educational Workshop",
    description: "Educational workshops providing children with essential learning opportunities.",
    videoId: "jJlkzDXjGOY",
    source: "youtube",
  },
  {
    id: 12,
    title: "Prajna Foundation - Overview of Programs",
    description: "A comprehensive overview of all Prajna Foundation programs and initiatives.",
    videoId: "v6hU7S3OqJ4",
    source: "youtube",
  },
]

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white hover:bg-gray-50 transition-colors border border-gray-100"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/80 flex items-center justify-center mb-4">
                <Play className="h-5 w-5 text-white fill-white" />
              </div>
              <h3 className="font-poppins text-lg font-bold text-primary mb-2">{video.title}</h3>
              <p className="font-raleway text-sm text-gray-600">{video.description}</p>
              <div className="mt-4 text-sm font-medium text-primary">Click to play video</div>
            </div>
          </div>
        ))}
      </div>

      {/* Video dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none">
          <div className="relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedVideo && (
              <div className="aspect-video w-full">
                {selectedVideo.source === "youtube" && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
