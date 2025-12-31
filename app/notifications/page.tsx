import NotificationItem from "@/components/NotificationItem"

export default function NotificationsPage() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">

      <NotificationItem
        title="Someone felt your words"
        message="A stranger paused, read your message, and felt understood."
        time="2 hours ago"
        unread
      />

      <NotificationItem
        title="It’s mutual"
        message="You both liked each other’s words. A connection is open."
        time="Yesterday"
      />

      <NotificationItem
        title="Quiet reminder"
        message="Lafzo is a space for thoughts. Take your time."
        time="2 days ago"
      />

    </div>
  )
}
