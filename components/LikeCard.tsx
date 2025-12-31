"use client"

export default function LikeCard() {
  return (
    <div
      className="
        relative
        rounded-2xl
        p-5
        bg-black/40
        backdrop-blur-xl
        border border-white/10
        shadow-[0_0_30px_rgba(196,181,253,0.15)]
      "
    >
      {/* top row */}
      <div className="flex items-center gap-4">
        {/* avatar */}
        <div
          className="
            w-14 h-14
            rounded-full
            bg-purple-400/20
            flex items-center justify-center
            text-xl
          "
        >
          🌙
        </div>

        {/* user info */}
        <div>
          <p className="text-white font-semibold text-lg">
            @silent_reader
          </p>
          <p className="text-white/60 text-sm">
            He, 26
          </p>
        </div>
      </div>

      {/* message preview */}
      <div className="mt-4 text-white/80 text-sm leading-relaxed">
        “लफ़्ज़ों में छुपा एक ख़ामोश पाठक, जो दिल की बातों में सुकून ढूंढता है…”
      </div>

      {/* time */}
      <div className="mt-3 text-white/40 text-xs">
        Liked your words · 2 hours ago
      </div>
    </div>
  )
}
