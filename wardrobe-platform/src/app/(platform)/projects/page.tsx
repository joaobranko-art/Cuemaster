"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Users,
  Package,
  CheckCircle2,
  AlertTriangle,
  Clock,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Eurovision 2026 Tour",
    client: "EBU Productions",
    phase: "Production",
    status: "on-track",
    crew: 14,
    items: 842,
    startDate: "2026-03-15",
    endDate: "2026-09-30",
    progress: 68,
    budget: "$220,000",
  },
  {
    id: 2,
    name: "Dubai Fashion Week",
    client: "DFW Agency",
    phase: "Pre-Production",
    status: "on-track",
    crew: 8,
    items: 326,
    startDate: "2026-07-01",
    endDate: "2026-08-15",
    progress: 35,
    budget: "$95,000",
  },
  {
    id: 3,
    name: "West End — Phantom Revival",
    client: "LW Theatres",
    phase: "Production",
    status: "at-risk",
    crew: 12,
    items: 1204,
    startDate: "2026-01-10",
    endDate: "2026-12-31",
    progress: 82,
    budget: "$110,000",
  },
  {
    id: 4,
    name: "Netflix — Crown S7",
    client: "Left Bank Pictures",
    phase: "Close-Out",
    status: "on-track",
    crew: 6,
    items: 567,
    startDate: "2025-09-01",
    endDate: "2026-07-15",
    progress: 95,
    budget: "$200,000",
  },
  {
    id: 5,
    name: "Coldplay World Tour 2026",
    client: "Live Nation",
    phase: "Pre-Production",
    status: "on-track",
    crew: 10,
    items: 180,
    startDate: "2026-06-01",
    endDate: "2027-03-31",
    progress: 22,
    budget: "$350,000",
  },
  {
    id: 6,
    name: "Broadway — Hamilton Revival",
    client: "Seaview Productions",
    phase: "Pre-Production",
    status: "on-track",
    crew: 9,
    items: 412,
    startDate: "2026-08-01",
    endDate: "2027-06-30",
    progress: 15,
    budget: "$175,000",
  },
];

const phaseColors: Record<string, string> = {
  "Pre-Production": "bg-blue-500/10 text-blue-400",
  Production: "bg-emerald-500/10 text-emerald-400",
  "Post-Production": "bg-purple-500/10 text-purple-400",
  "Close-Out": "bg-amber-500/10 text-amber-400",
};

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Manage all production projects across your portfolio.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Project
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            className="h-9 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
        </div>
        <button className="flex h-9 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground">
          <Filter className="h-4 w-4" />
          Filter
        </button>
        <div className="flex rounded-lg border border-border bg-surface">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-1.5 text-xs font-medium rounded-l-lg transition-colors ${
              view === "grid"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-1.5 text-xs font-medium rounded-r-lg transition-colors ${
              view === "list"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {project.client}
                  </p>
                </div>
                <button className="rounded-lg p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-surface-hover group-hover:opacity-100">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    phaseColors[project.phase] ?? ""
                  }`}
                >
                  {project.phase}
                </span>
                {project.status === "at-risk" ? (
                  <span className="flex items-center gap-1 text-xs text-warning">
                    <AlertTriangle className="h-3 w-3" /> At Risk
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-success">
                    <CheckCircle2 className="h-3 w-3" /> On Track
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-card-foreground">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div
                    className="h-1.5 rounded-full gradient-primary transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" /> {project.crew} crew
                </span>
                <span className="flex items-center gap-1">
                  <Package className="h-3 w-3" /> {project.items} items
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />{" "}
                  {new Date(project.endDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                <span className="text-xs font-medium text-card-foreground">
                  {project.budget}
                </span>
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                  Project
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                  Phase
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                  Progress
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                  Crew
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                  Budget
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="transition-colors hover:bg-surface-hover cursor-pointer"
                >
                  <td className="px-5 py-3.5">
                    <p className="text-sm font-medium text-card-foreground">
                      {project.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.client}
                    </p>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        phaseColors[project.phase] ?? ""
                      }`}
                    >
                      {project.phase}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-muted">
                        <div
                          className="h-1.5 rounded-full gradient-primary"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-card-foreground">
                    {project.crew}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-card-foreground">
                    {project.budget}
                  </td>
                  <td className="px-5 py-3.5">
                    {project.status === "at-risk" ? (
                      <span className="flex items-center gap-1 text-xs text-warning">
                        <AlertTriangle className="h-3 w-3" /> At Risk
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-success">
                        <CheckCircle2 className="h-3 w-3" /> On Track
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
