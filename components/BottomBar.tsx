"use client"

import { Home, Heart, Bell, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

const ACTIVE_COLOR = "#C4B5FD" // lavender
const INACTIVE_COLOR = "rgba(255,255,255,0.6)"

export default function BottomBar() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => pathname === path

  const IconWrapper = ({
    active,
    children,
    onClick,
  }: {
    active: boolean
    children: React.ReactNode
    onClick: () => void
  }) => (
    <button onClick={onClick} className="relative">
      {/* glow */}
      {active && (
        <span
          className="
            absolute inset-0
            -z-10
            rounded-full
            bg-purple-400/40
            blur-xl
          "
        />
      )}
      {children}
    </button>
  )

  return (
    <nav
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        w-[90%]
        h-16
        flex items-center justify-around
        rounded-full
        bg-black/50
        backdrop-blur-xl
        border border-white/10
        z-50
      "
    >
      {/* HOME */}
      <IconWrapper
        active={isActive("/")}
        onClick={() => router.push("/")}
      >
        <Home size={26} color={isActive("/") ? ACTIVE_COLOR : INACTIVE_COLOR} />
      </IconWrapper>

      {/* LIKE */}
      <IconWrapper
        active={isActive("/likes")}
        onClick={() => router.push("/likes")}
      >
        <Heart
          size={26}
          color={isActive("/likes") ? ACTIVE_COLOR : INACTIVE_COLOR}
        />
      </IconWrapper>

      {/* NOTIFICATIONS */}
      <IconWrapper
        active={isActive("/notifications")}
        onClick={() => router.push("/notifications")}
      >
        <Bell
          size={26}
          color={
            isActive("/notifications") ? ACTIVE_COLOR : INACTIVE_COLOR
          }
        />
      </IconWrapper>

      {/* PROFILE */}
      <IconWrapper
        active={isActive("/profile")}
        onClick={() => router.push("/profile")}
      >
        <User
          size={26}
          color={isActive("/profile") ? ACTIVE_COLOR : INACTIVE_COLOR}
        />
      </IconWrapper>
    </nav>
  )
}
