"use client"

import { Pencil } from "lucide-react"

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

          {/* subtle inner glow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(196,181,253,0.25)]" />
        </div>

        {/* USERNAME */}
        <h1 className="text-2xl font-semibold tracking-wide">
          @silent_reader
        </h1>

        {/* GENDER + AGE */}
        <p className="text-base text-white/60">
          He • 26
        </p>
      </section>

      {/* BIO CARD */}
      <section className="mt-12">
        <div
          className="
            relative
            rounded-2xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            px-6 py-5
            max-h-[220px]
            overflow-y-auto
            text-lg
            leading-relaxed
          "
        >
          {/* inner soft shadow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]" />

          <p className="relative z-10 text-white/95">
            लफ़्ज़ों में छुपा एक ख़ामोश पाठक,  
            जो दिल की बातों में सुकून ढूंढता है।
          </p>

          {/* EDIT BUTTON */}
          <button
            className="
              absolute bottom-4 right-4
              w-11 h-11
              rounded-full
              bg-white/10
              flex items-center justify-center
              hover:bg-white/20
              transition
            "
          >
            <Pencil size={18} className="text-[#C4B5FD]" />
          </button>
        </div>
      </section>

      {/* SETTINGS */}
      <section className="mt-14 space-y-8">
        <SettingItem label="Privacy" />
        <SettingItem label="Theme" />
        <SettingItem label="Sign Out" danger />
      </section>
    </main>
  )
}

/* SETTINGS ROW */
function SettingItem({
  label,
  danger = false,
}: {
  label: string
  danger?: boolean
}) {
  return (
    <div className="flex items-center justify-between text-lg">
      <span className={danger ? "text-red-500" : "text-white/90"}>
        {label}
      </span>
      {!danger && <span className="text-white/40 text-xl">›</span>}
    </div>
  )
}
