"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, User } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/projects": "Projects",
  "/workflow": "Phase Workflow",
  "/inventory": "Wardrobe Inventory",
  "/flight-cases": "Flight Cases",
  "/budget": "Budget & Finance",
  "/crew": "Crew",
  "/accommodation": "Accommodation",
  "/travel": "Travel",
  "/logistics": "Logistics",
  "/client-portal": "Client Portal",
  "/reports": "Reports",
  "/notifications": "Notifications",
  "/documents": "Documents",
  "/ai-studio": "AI Design Studio",
};

export function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "CueMaster";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-xl px-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="h-9 w-64 rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
            ⌘K
          </kbd>
        </div>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:bg-surface-hover hover:text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            3
          </span>
        </button>

        <ThemeToggle />

        <button className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-white">
          <User className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
