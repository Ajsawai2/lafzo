"use client"

import { Heart, X } from "lucide-react"
import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import heartAnimation from "@/public/animations/heart.json"

const messages = [
  {
    user: "@silent_reader",
    text: `कभी-कभी खामोशी भी
बहुत कुछ कह जाती है।`
  },
  {
    user: "@midnight_writer",
    text: `मैं भीड़ में रहता हूँ
लेकिन दिल अकेला है।`
  },
  {
    user: "@lost_poet",
    text: `लफ़्ज़ कम हैं
पर एहसास पूरे।`
  }
]

export default function MessageCard() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [canDecide, setCanDecide] = useState(false)
  const [playAnim, setPlayAnim] = useState(false)

  const message = messages[index]

  // reading pause
  useEffect(() => {
    if (!revealed) return
    const timer = setTimeout(() => setCanDecide(true), 5000)
    return () => clearTimeout(timer)
  }, [revealed])

  const nextCard = () => {
    setRevealed(false)
    setCanDecide(false)
    setPlayAnim(false)
    setIndex((i) => (i + 1) % messages.length)
  }

  const handleLike = () => {
    if (!canDecide) return
    setPlayAnim(true)

    setTimeout(() => {
      nextCard()
    }, 900)
  }

  const handleSkip = () => {
    if (!canDecide) return
    nextCard()
  }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center px-4 pb-28 relative">

      {/* LOTTIE HEART ANIMATION */}
      {playAnim && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="w-40 h-40">
            <Lottie animationData={heartAnimation} loop={false} />
          </div>
        </div>
      )}

      <div className="w-full max-w-sm flex flex-col items-center gap-8">

        {/* CARD */}
        <div
          onClick={() => !revealed && setRevealed(true)}
          className={`
            w-full h-[340px]
            rounded-2xl
            bg-black/70
            backdrop-blur-xl
            border border-white/10
            shadow-[inset_0_0_12px_rgba(196,181,253,0.15)]
            px-5 py-4
            flex flex-col
            transition
            ${!revealed ? "cursor-pointer" : ""}
          `}
        >
          {/* USER */}
          <div className="text-right text-sm text-white/50 mb-2">
            {message.user}
          </div>

          {/* MESSAGE */}
          <div
            className={`
              flex-1 overflow-y-auto
              text-lg leading-relaxed text-center pr-1
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
            <div className="mt-4 text-center text-sm text-white/40">
              Tap to read
            </div>
          )}

          {revealed && !canDecide && (
            <div className="mt-4 text-center text-sm text-white/40">
              Take your time
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-24">
          <button
            disabled={!canDecide}
            onClick={handleSkip}
            className={`
              w-14 h-14 rounded-full
              flex items-center justify-center
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
              w-16 h-16 rounded-full
              flex items-center justify-center
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

      </div>
    </div>
  )
}
