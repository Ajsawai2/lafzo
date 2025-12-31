"use client"

import { Heart, X } from "lucide-react"

export default function MessageCard() {
  return (
   <div className="min-h-screen px-4 pt-24 pb-32 flex justify-center">

      
      <div className="w-full max-w-sm flex flex-col items-center gap-8 mt-5">

        {/* CARD */}
        <div
          className="
            w-full
            h-[330px]
            rounded-2xl
            bg-black/60
            backdrop-blur-xl
            border border-white/10
            shadow-[inset_0_0_8px_rgba(255,255,255,0.05)]
            px-5 py-4
            flex flex-col
          "
        >
          <div className="text-right text-sm text-gray-400 mb-2 shrink-0">
            @silent_reader
          </div>

          <div
            className="
              flex-1
              overflow-y-auto
              text-white
              text-lg
              leading-relaxed
              text-center
              pr-1
            "
          >
            दिनों मापलों के आदेशों ने  
            क्यू क्यू अव्यविन्नता यादें हैं गम  

            <br /><br />
            यह टेक्स्ट 500 से 1000 शब्द का हो सकता है।
            कार्ड की height नहीं बदलेगी।
            सिर्फ यही हिस्सा scroll होगा।
            पूरा page कभी scroll नहीं करेगा।
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-20">
          <button className="text-white/70 hover:text-white transition">
            <X size={28} />
          </button>

          <button className="text-red-500 hover:scale-110 transition">
            <Heart size={32} fill="currentColor" />
          </button>
        </div>

      </div>
    </div>
  )
}
