"use client"

import { Check } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-24 pb-32">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-semibold text-center mb-14">
        Privacy
      </h1>

      {/* SECTION: VISIBILITY */}
      <PrivacyBlock
        title="Who can see my words"
        description="Your words are visible to others so meaningful connections can happen."
        right={
          <span className="text-sm px-4 py-2 rounded-full bg-white/10 border border-white/15">
            Everyone
          </span>
        }
      />

      {/* SECTION: GENDER */}
      <PrivacyBlock
        title="Gender"
        description="Gender is shown to help people connect with the right intent and reduce fake profiles."
        right={<Checked />}
      />

      {/* SECTION: AGE */}
      <PrivacyBlock
        title="Age"
        description="Your age is shown as a range (example: 21–25) instead of an exact number."
        right={<Checked />}
      />

      {/* SECTION: CONTACT SHARING */}
      <PrivacyBlock
        title="Contact sharing"
        description="Your contact details are shared only after both people like each other’s words."
        right={
          <span className="text-sm px-4 py-2 rounded-full bg-white/10 border border-white/15">
            After match
          </span>
        }
      />

      {/* CONSENT & TERMS */}
      <section className="mt-16 space-y-6 text-white/70 text-sm leading-relaxed">
        <p>
          Lafzo is built around honesty, consent, and emotional safety.
          By using Lafzo, you agree to the following:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>
            Your words are visible to others to enable real connections.
          </li>
          <li>
            Gender and age range are shown to reduce confusion and fake profiles.
          </li>
          <li>
            Contact details are shared only after a mutual match.
          </li>
          <li>
            Lafzo does not provide an in-app chat system.
          </li>
          <li>
            You are responsible for any communication after contact details are shared.
          </li>
        </ul>

        <p className="pt-4 text-white/50">
          Lafzo does not store or monitor private conversations that happen outside the app.
          Please connect responsibly and respectfully.
        </p>
      </section>

    </main>
  )
}

/* ---------------- COMPONENTS ---------------- */

function PrivacyBlock({
  title,
  description,
  right,
}: {
  title: string
  description: string
  right: React.ReactNode
}) {
  return (
    <div className="
      mb-8
      rounded-2xl
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      px-6 py-5
      flex items-center justify-between gap-4
    ">
      <div>
        <h2 className="text-lg font-medium mb-1">
          {title}
        </h2>
        <p className="text-sm text-white/60 max-w-xs">
          {description}
        </p>
      </div>
      {right}
    </div>
  )
}

function Checked() {
  return (
    <div className="
      w-8 h-8
      rounded-lg
      bg-[#C4B5FD]
      flex items-center justify-center
    ">
      <Check size={18} className="text-black" />
    </div>
  )
}
