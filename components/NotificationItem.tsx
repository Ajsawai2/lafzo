interface Props {
  title: string
  message: string
  time: string
  unread?: boolean
}

export default function NotificationItem({
  title,
  message,
  time,
  unread = false,
}: Props) {
  return (
    // CARD WRAPPER
    <div className="relative rounded-3xl overflow-hidden">

      {/* ✨ CURVED INNER BORDER LIGHT */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          ring-1 ring-violet-400/25
          shadow-[inset_0_-28px_80px_rgba(139,92,246,0.45)]
        "
      />

      {/* ✨ ROSHNI / PARTICLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          bg-[radial-gradient(120%_70%_at_50%_100%,rgba(139,92,246,0.22),transparent_65%)]
          mix-blend-screen
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          bg-black/65
          backdrop-blur-xl
          rounded-3xl
          p-6
          min-h-[140px]
        "
      >
        {/* unread dot */}
        {unread && (
          <span className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-violet-400" />
        )}

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-base text-white/70 leading-relaxed">
          {message}
        </p>

        <span className="mt-4 block text-sm text-white/40">
          {time}
        </span>
      </div>

    </div>
  )
}
