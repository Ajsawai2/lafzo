"use client"

import { Heart, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"

import heartAnimation from "@/public/animations/heart.json"
import skipAnimation from "@/public/animations/skip.json"

const messages = [
  {
    name: "Silent Reader",
    username: "silent_reader",
    age: 26,
    gender: "male",
    text: `कभी-कभी खामोशी भी
बहुत कुछ कह जाती है।`,
    interests: ["Music", "Movies", "Writing"],
  },
  {
    name: "Midnight Writer",
    username: "midnight_writer",
    age: 24,
    gender: "female",
    text: `मैं भीड़ में रहता हूँ
लेकिन दिल अकेला है।`,
    interests: ["Travel", "Poetry", "Night walks"],
  },
]

export default function MessageCard() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [canDecide, setCanDecide] = useState(false)
  const [playLike, setPlayLike] = useState(false)
  const [playSkip, setPlaySkip] = useState(false)

  const message = messages[index]

  useEffect(() => {
    if (!revealed) return
    const t = setTimeout(() => setCanDecide(true), 5000)
    return () => clearTimeout(t)
  }, [revealed])

  const nextCard = () => {
    setRevealed(false)
    setCanDecide(false)
    setPlayLike(false)
    setPlaySkip(false)
    setIndex((i) => (i + 1) % messages.length)
  }

  const handleLike = () => {
    if (!canDecide) return
    setPlayLike(true)
    setTimeout(nextCard, 900)
  }

  const handleSkip = () => {
    if (!canDecide) return
    setPlaySkip(true)
    setTimeout(nextCard, 700)
  }

  const genderColor =
    message.gender === "female" ? "bg-pink-400" : "bg-sky-400"

  return (
    <div className="h-screen flex items-start justify-center px-4 pt-10 pb-28 relative overflow-hidden">

      {/* LIKE ANIMATION */}
      {playLike && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="w-40 h-40">
            <Lottie animationData={heartAnimation} loop={false} />
          </div>
        </div>
      )}

      {/* SKIP ANIMATION */}
      {playSkip && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="w-32 h-32 opacity-70">
            <Lottie animationData={skipAnimation} loop={false} />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-sm flex flex-col items-center gap-8"
        >
          {/* CARD */}
          <div
            onClick={() => !revealed && setRevealed(true)}
            className="
              relative
              w-full h-[360px]
              rounded-2xl
              bg-black/70
              backdrop-blur-xl
              border border-white/10
              shadow-[inset_0_0_14px_rgba(196,181,253,0.18)]
              px-5 py-4
              flex flex-col
              cursor-pointer
            "
          >
            {/* GENDER DOT */}
            <div
              className={`absolute top-4 right-4 w-3 h-3 rounded-full ${genderColor}`}
            />

            {/* HEADER */}
            <div className="mb-2">
              <div className="text-xl font-semibold text-white">
                {message.name}
              </div>
              <div className="text-sm text-white/50 flex gap-2">
                <span>@{message.username}</span>
                <span>•</span>
                <span>{message.age}</span>
              </div>
            </div>

            {/* MESSAGE */}
            <div
              className={`
                flex-1 overflow-y-auto text-lg leading-relaxed text-center pr-1
                transition-all duration-500
                ${
                  revealed
                    ? "text-white blur-0"
                    : "text-white/30 blur-sm select-none"
                }
              `}
            >
              {message.text}
            </div>

            {!revealed && (
              <div className="mt-3 text-center text-sm text-white/40">
                Tap to read
              </div>
            )}

            {revealed && !canDecide && (
              <div className="mt-3 text-center text-sm text-white/40">
                Take your time
              </div>
            )}

            {/* INTERESTS */}
            {revealed && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {message.interests.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1.5 rounded-full
                      bg-white/5 border border-white/10
                      text-sm text-white/80
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-24">
            <button
              disabled={!canDecide}
              onClick={handleSkip}
              className={`
                w-14 h-14 rounded-full flex items-center justify-center
                transition
                ${
                  canDecide
                    ? "bg-white/5 text-white/70 hover:bg-white/10"
                    : "bg-white/5 text-white/30"
                }
              `}
            >
              <X size={26} />
            </button>

            <button
              disabled={!canDecide}
              onClick={handleLike}
              className={`
                w-16 h-16 rounded-full flex items-center justify-center
                transition
                ${
                  canDecide
                    ? "bg-red-500/10 text-red-500 hover:scale-110"
                    : "bg-red-500/5 text-red-500/40"
                }
              `}
            >
              <Heart size={30} fill="currentColor" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
