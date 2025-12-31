"use client"

import Image from "next/image"
import Link from "next/link"
import { Gift } from "lucide-react"

export default function TopBar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full
        h-18
        px-5
        flex items-center justify-between
        bg-black/80
        backdrop-blur-xl
        z-50
      "
    >
      {/* LEFT: LOGO */}
      <Image
        src="/LOGO.png"
        alt="Lafzo"
        width={32}
        height={32}
        priority
        className="drop-shadow-[0_0_14px_rgba(168,139,255,0.7)]"
      />

      {/* RIGHT: REWARDS ICON (NO BG) */}
      <Link href="/rewards" className="relative">
        <Gift
          size={28}
          className="
            text-[#C4B5FD]
            drop-shadow-[0_0_16px_rgba(196,181,253,1)]
            hover:scale-110
            transition
          "
        />

        {/* optional tiny indicator */}
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500" />
      </Link>
    </header>
  )
}
