"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function VideoSection() {
  const videos = [
    {
      id: "video1",
      title: "Introduction to Burn Radio",
      thumbnail: "/placeholder.svg?height=300&width=500",
      youtubeId: "YR1zbreLTKU",
    },
    {
      id: "video2",
      title: "Student Success Stories",
      thumbnail: "/placeholder.svg?height=300&width=500",
      youtubeId: null,
    },
    {
      id: "video3",
      title: "Our Impact in Schools",
      thumbnail: "/placeholder.svg?height=300&width=500",
      youtubeId: null,
    },
  ]

  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    if (activeVideo.youtubeId) {
      setIsPlaying(true)
    }
  }

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]" variants={fadeIn}>
          Watch Our Videos
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div className="lg:col-span-2" variants={fadeIn}>
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              {isPlaying && activeVideo.youtubeId ? (
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              ) : (
                <>
                  <img
                    src={activeVideo.thumbnail || "/placeholder.svg"}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      className="bg-[#f7a41d] hover:bg-[#e5940a] text-black rounded-full p-4 transition-all hover:scale-110"
                      onClick={handlePlayVideo}
                    >
                      <Play className="h-8 w-8" />
                    </button>
                  </motion.div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{activeVideo.title}</h3>
                </>
              )}
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={staggerContainer}>
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeVideo.id === video.id ? "bg-[#0077be] text-white" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveVideo(video)
                  setIsPlaying(false)
                }}
                variants={fadeIn}
                whileHover={{ x: activeVideo.id === video.id ? 0 : 5 }}
              >
                <h3 className="font-bold">{video.title}</h3>
                <p className="text-sm mt-1">Click to watch this video</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
