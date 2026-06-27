"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  FolderKanban,
  GitBranch,
  Shirt,
  Package,
  DollarSign,
  Users,
  Hotel,
  Plane,
  Truck,
  Globe,
  BarChart3,
  Bell,
  FileText,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const modules = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Workflow", href: "/workflow", icon: GitBranch },
  { name: "Inventory", href: "/inventory", icon: Shirt },
  { name: "Flight Cases", href: "/flight-cases", icon: Package },
  { name: "Budget & Finance", href: "/budget", icon: DollarSign },
  { name: "Crew", href: "/crew", icon: Users },
  { name: "Accommodation", href: "/accommodation", icon: Hotel },
  { name: "Travel", href: "/travel", icon: Plane },
  { name: "Logistics", href: "/logistics", icon: Truck },
  { name: "Client Portal", href: "/client-portal", icon: Globe },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "AI Studio", href: "/ai-studio", icon: Sparkles },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border bg-sidebar transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[240px]"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2 animate-fade-in">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Shirt className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              CueMaster
            </span>
          </Link>
        )}
        {collapsed && (
          <Link href="/dashboard" className="mx-auto">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Shirt className="h-4 w-4 text-white" />
            </div>
          </Link>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        <ul className="space-y-0.5">
          {modules.map((mod) => {
            const isActive = pathname === mod.href || pathname.startsWith(mod.href + "/");
            const Icon = mod.icon;
            return (
              <li key={mod.href}>
                <Link
                  href={mod.href}
                  className={clsx(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-150",
                    isActive
                      ? "bg-sidebar-active/10 text-white font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-white"
                  )}
                  title={mod.name}
                >
                  <Icon
                    className={clsx(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-sidebar-active" : ""
                    )}
                  />
                  {!collapsed && <span>{mod.name}</span>}
                  {isActive && (
                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-sidebar-active" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/5 p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center rounded-lg p-2 text-sidebar-foreground transition-colors hover:bg-sidebar-hover hover:text-white"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>
    </aside>
  );
}
