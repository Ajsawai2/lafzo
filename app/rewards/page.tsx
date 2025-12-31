"use client"

import { Clock, Zap } from "lucide-react"

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-24 pb-32">

      <h1 className="text-3xl font-semibold text-center mb-12">
        Rewards
      </h1>

      {/* FREE REWARD */}
      <RewardCard
        title="Free reward"
        description="After a mutual match, contact details unlock automatically after 24 hours."
        icon={<Clock />}
        tag="Free"
      />

      {/* PAID INSTANT */}
      <RewardCard
        title="Instant unlock"
        description="Get contact details instantly without waiting."
        icon={<Zap />}
        tag="₹49"
        highlight
      />

      {/* WEEKLY LIMIT INFO */}
      <div className="mt-10 text-center text-white/60 text-sm leading-relaxed">
        You get limited free rewards every week.
        If you want more or faster access,
        you can unlock instantly.
      </div>

    </main>
  )
}

/* ---------------- COMPONENT ---------------- */

function RewardCard({
  title,
  description,
  icon,
  tag,
  highlight = false,
}: {
  title: string
  description: string
  icon: React.ReactNode
  tag: string
  highlight?: boolean
}) {
  return (
    <div
      className={`
        mb-6
        rounded-2xl
        px-6 py-5
        border
        backdrop-blur-xl
        ${highlight
          ? "border-[#C4B5FD]/40 bg-[#C4B5FD]/10"
          : "border-white/10 bg-white/5"
        }
      `}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-[#C4B5FD]">{icon}</div>
          <h2 className="text-lg font-medium">{title}</h2>
        </div>

        <span
          className={`
            text-sm px-3 py-1 rounded-full
            ${highlight ? "bg-[#C4B5FD] text-black" : "bg-white/10"}
          `}
        >
          {tag}
        </span>
      </div>

      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
