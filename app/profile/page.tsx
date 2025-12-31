"use client"

import { Pencil, Lock, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProfilePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  // load theme
  useEffect(() => {
    const saved = localStorage.getItem("lafzo-theme") as "dark" | "light"
    if (saved) setTheme(saved)
  }, [])

  // apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light")
    localStorage.setItem("lafzo-theme", theme)
  }, [theme])

  return (
    <main
      className={`
        relative min-h-screen px-6 pt-24 pb-32
        ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}
      `}
    >
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

        <p className="text-base opacity-60">
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

      {/* SETTINGS */}
      <section className="mt-14 space-y-8">

        {/* PRIVACY */}
        <Link href="/profile/privacy">
          <SettingItem
            label="Privacy"
            icon={<Lock size={18} className="text-[#C4B5FD]" />}
          />
        </Link>

        {/* THEME TOGGLE */}
        <SettingItem
          label="Theme"
          icon={
            theme === "dark"
              ? <Moon size={18} />
              : <Sun size={18} />
          }
          action={
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="
                w-14 h-8 rounded-full
                bg-white/10 flex items-center px-1
              "
            >
              <span
                className={`
                  w-6 h-6 rounded-full bg-[#C4B5FD]
                  transition-transform
                  ${theme === "light" ? "translate-x-6" : ""}
                `}
              />
            </button>
          }
        />

        {/* SIGN OUT */}
        <SettingItem label="Sign Out" danger />
      </section>
    </main>
  )
}

/* SETTINGS ROW */
function SettingItem({
  label,
  icon,
  action,
  danger = false,
}: {
  label: string
  icon?: React.ReactNode
  action?: React.ReactNode
  danger?: boolean
}) {
  return (
    <div className="flex items-center justify-between text-lg">
      <div className="flex items-center gap-3">
        {icon}
        <span className={danger ? "text-red-500" : "opacity-90"}>
          {label}
        </span>
      </div>

      {action ? action : (!danger && <span className="opacity-40 text-xl">›</span>)}
    </div>
  )
}
