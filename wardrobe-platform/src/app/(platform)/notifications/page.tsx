"use client";

import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Package,
  DollarSign,
  Users,
  Truck,
  MessageSquare,
  Check,
  Trash2,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "alert",
    title: "Budget threshold reached",
    message: "Phantom Revival project has used 95% of allocated budget.",
    time: "10 minutes ago",
    read: false,
    icon: AlertTriangle,
    iconColor: "text-warning",
    iconBg: "bg-amber-500/10",
  },
  {
    id: 2,
    type: "shipment",
    title: "Shipment delivered",
    message: "Phantom Revival replacements (SHP-003) delivered to Her Majesty's Theatre.",
    time: "2 hours ago",
    read: false,
    icon: Package,
    iconColor: "text-success",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: 3,
    type: "crew",
    title: "New crew assignment",
    message: "David Osei has been assigned to the Coldplay World Tour 2026 project.",
    time: "4 hours ago",
    read: false,
    icon: Users,
    iconColor: "text-primary",
    iconBg: "bg-blue-500/10",
  },
  {
    id: 4,
    type: "message",
    title: "New client message",
    message: "Henrik Andersson from EBU Productions sent a message about costume approvals.",
    time: "6 hours ago",
    read: true,
    icon: MessageSquare,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    id: 5,
    type: "finance",
    title: "Payment received",
    message: "Live Nation deposit of $75,000 for Coldplay Tour has been received.",
    time: "1 day ago",
    read: true,
    icon: DollarSign,
    iconColor: "text-success",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: 6,
    type: "logistics",
    title: "Shipment delay",
    message: "Dubai FW shipment (SHP-002) is held at customs. Expected 2-day delay.",
    time: "1 day ago",
    read: true,
    icon: Truck,
    iconColor: "text-warning",
    iconBg: "bg-amber-500/10",
  },
  {
    id: 7,
    type: "task",
    title: "Task completed",
    message: "Mood board & design concepts completed for Eurovision 2026 Tour.",
    time: "2 days ago",
    read: true,
    icon: CheckCircle2,
    iconColor: "text-success",
    iconBg: "bg-emerald-500/10",
  },
];

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground">
            <Check className="h-4 w-4" />
            Mark all read
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
            filter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-surface border border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
            filter === "unread"
              ? "bg-primary text-primary-foreground"
              : "bg-surface border border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card divide-y divide-border">
        {filtered.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`flex items-start gap-4 px-5 py-4 transition-colors hover:bg-surface-hover cursor-pointer ${
                !notification.read ? "bg-accent/30" : ""
              }`}
            >
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${notification.iconBg}`}
              >
                <Icon className={`h-4 w-4 ${notification.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4
                    className={`text-sm ${
                      !notification.read
                        ? "font-semibold text-card-foreground"
                        : "font-medium text-card-foreground"
                    }`}
                  >
                    {notification.title}
                  </h4>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {notification.message}
                </p>
              </div>
              {!notification.read && (
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
