"use client";

import {
  FolderKanban,
  Shirt,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Package,
} from "lucide-react";
import { StatCard } from "@/components/stat-card";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2 this month",
    changeType: "positive" as const,
    icon: FolderKanban,
    gradient: "gradient-primary",
  },
  {
    title: "Wardrobe Items",
    value: "3,847",
    change: "+156 added",
    changeType: "positive" as const,
    icon: Shirt,
    gradient: "gradient-accent",
  },
  {
    title: "Active Crew",
    value: "48",
    change: "6 on assignment",
    changeType: "neutral" as const,
    icon: Users,
    gradient: "gradient-success",
  },
  {
    title: "Monthly Budget",
    value: "$284K",
    change: "72% utilized",
    changeType: "neutral" as const,
    icon: DollarSign,
    gradient: "gradient-warm",
  },
];

const recentProjects = [
  {
    name: "Eurovision 2026 Tour",
    client: "EBU Productions",
    phase: "Production",
    progress: 68,
    status: "on-track",
  },
  {
    name: "Dubai Fashion Week",
    client: "DFW Agency",
    phase: "Pre-Production",
    progress: 35,
    status: "on-track",
  },
  {
    name: "West End — Phantom Revival",
    client: "LW Theatres",
    phase: "Production",
    progress: 82,
    status: "at-risk",
  },
  {
    name: "Netflix — Crown S7",
    client: "Left Bank Pictures",
    phase: "Close-Out",
    progress: 95,
    status: "on-track",
  },
  {
    name: "Coldplay World Tour 2026",
    client: "Live Nation",
    phase: "Pre-Production",
    progress: 22,
    status: "on-track",
  },
];

const upcomingTasks = [
  { task: "Finalize costume fittings — Eurovision", due: "Today", priority: "high" },
  { task: "Ship flight cases to Dubai venue", due: "Tomorrow", priority: "high" },
  { task: "Review budget report — Phantom Revival", due: "Jun 29", priority: "medium" },
  { task: "Crew scheduling — Coldplay tour", due: "Jun 30", priority: "medium" },
  { task: "Client review meeting — Netflix Crown", due: "Jul 1", priority: "low" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Welcome back
          </h2>
          <p className="text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening across your productions today.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <FolderKanban className="h-4 w-4" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold text-card-foreground">
              Active Projects
            </h3>
            <button className="flex items-center gap-1 text-xs text-primary hover:underline">
              View all <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="divide-y divide-border">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-surface-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                    <Package className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {project.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.client}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                    {project.phase}
                  </span>
                  <div className="hidden w-24 sm:block">
                    <div className="h-1.5 rounded-full bg-muted">
                      <div
                        className="h-1.5 rounded-full gradient-primary transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground w-8 text-right">
                    {project.progress}%
                  </span>
                  {project.status === "at-risk" ? (
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold text-card-foreground">
              Upcoming Tasks
            </h3>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> Today
            </span>
          </div>
          <div className="divide-y divide-border">
            {upcomingTasks.map((item) => (
              <div
                key={item.task}
                className="flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-surface-hover"
              >
                <div
                  className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                    item.priority === "high"
                      ? "bg-destructive"
                      : item.priority === "medium"
                      ? "bg-warning"
                      : "bg-success"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-card-foreground truncate">
                    {item.task}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 text-sm font-semibold text-card-foreground">
            Budget Overview
          </h3>
          <div className="space-y-4">
            {[
              { label: "Eurovision 2026 Tour", spent: 145000, total: 220000 },
              { label: "Dubai Fashion Week", spent: 38000, total: 95000 },
              { label: "Phantom Revival", spent: 82000, total: 110000 },
              { label: "Netflix Crown S7", spent: 190000, total: 200000 },
            ].map((budget) => (
              <div key={budget.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-card-foreground">{budget.label}</span>
                  <span className="text-muted-foreground">
                    ${(budget.spent / 1000).toFixed(0)}K / $
                    {(budget.total / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      budget.spent / budget.total > 0.9
                        ? "bg-warning"
                        : "gradient-primary"
                    }`}
                    style={{
                      width: `${(budget.spent / budget.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 text-sm font-semibold text-card-foreground">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Shirt, label: "Add Inventory", color: "gradient-primary" },
              { icon: Users, label: "Assign Crew", color: "gradient-accent" },
              { icon: Package, label: "Track Shipment", color: "gradient-success" },
              { icon: TrendingUp, label: "View Reports", color: "gradient-warm" },
            ].map((action) => (
              <button
                key={action.label}
                className="flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${action.color}`}
                >
                  <action.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-card-foreground">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
