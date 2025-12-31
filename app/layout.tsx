import "./globals.css"
import TopBar from "@/components/TopBar"
import BottomBar from "@/components/BottomBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <TopBar />

        {/* 👇 PAGE CONTENT RENDERS HERE */}
        <main className="pt-14 pb-28">
          {children}
        </main>

        <BottomBar />
      </body>
    </html>
  )
}
