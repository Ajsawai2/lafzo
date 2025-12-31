"use client"

import Image from "next/image"
import { Settings } from "lucide-react"

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
      {/* LEFT: LOGO (≈40% BIGGER) */}
      <Image
        src="/LOGO.png"
        alt="Lafzo"
        width={32}      /* ~40% bigger than 22 */
        height={32}
        priority
      />

      {/* RIGHT: SETTINGS ICON (≈40% BIGGER) */}
      <button className="text-white">
        <Settings size={28} />   {/* ~40% bigger */}
      </button>
    </header>
  )
}
