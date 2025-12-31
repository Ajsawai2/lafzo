"use client"

import { Gift, Pencil, Lock } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 pt-24 pb-32">

      {/* PROFILE HEADER */}
      <section className="flex flex-col items-center gap-6">
        {/* AVATAR */}
        <div className="relative">
          <div className="w-36 h-36 rounded-full bg-[#C4B5FD]/15 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#C4B5FD]/40" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(196,181,253,0.25)]" />
        </div>

        <h1 className="text-2xl font-semibold tracking-wide">
          @silent_reader
        </h1>

        <p className="text-base text-white/60">
          He • 26
        </p>
      </section>

      {/* BIO CARD */}
      <section className="mt-12">
        <div
          className="
            relative rounded-2xl
            bg-white/5 border border-white/10
            backdrop-blur-xl
            px-6 py-5
            max-h-[220px]
            overflow-y-auto
            text-lg leading-relaxed
          "
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]" />

          <p className="relative z-10">
            लफ़्ज़ों में छुपा एक ख़ामोश पाठक,  
            जो दिल की बातों में सुकून ढूंढता है।
          </p>

          <button
            className="
              absolute bottom-4 right-4
              w-11 h-11 rounded-full
              bg-white/10
              flex items-center justify-center
              hover:bg-white/20 transition
            "
          >
            <Pencil size={18} className="text-[#C4B5FD]" />
          </button>
        </div>
      </section>

      {/* SETTINGS CARD */}
      <section className="mt-14">
        <div
          className="
            relative rounded-2xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            px-5 py-4
            space-y-1
            shadow-[inset_0_0_30px_rgba(196,181,253,0.12)]
          "
        >
          {/* CORNER GLOW */}
          <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 bg-[#C4B5FD]/20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-6 -right-6 w-24 h-24 bg-[#C4B5FD]/15 blur-3xl rounded-full" />

          <Link href="/profile/privacy">
            <SettingRow
              label="Privacy"
              icon={<Lock size={18} className="text-[#C4B5FD]" />}
            />
          </Link>

          <Link href="/rewards">
            <SettingRow
              label="Rewards"
              icon={<Gift size={18} className="text-[#C4B5FD]" />}
            />
          </Link>

          <div className="my-2 h-px bg-white/10" />

          <SettingRow label="Sign Out" danger />
        </div>
      </section>

    </main>
  )
}

/* SETTINGS ROW */
function SettingRow({
  label,
  icon,
  danger = false,
}: {
  label: string
  icon?: React.ReactNode
  danger?: boolean
}) {
  return (
    <button
      className="
        w-full flex items-center justify-between
        py-3 rounded-lg
        hover:bg-white/5 transition
      "
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className={danger ? "text-red-500" : "text-white/90"}>
          {label}
        </span>
      </div>

      {!danger && <span className="text-white/40 text-xl">›</span>}
    </button>
  )
}
