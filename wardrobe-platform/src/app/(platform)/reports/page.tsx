"use client";

import {
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Clock,
  FileText,
  ArrowRight,
} from "lucide-react";

const reportTypes = [
  {
    title: "Financial Summary",
    description: "Revenue, expenses, and budget utilization across projects",
    icon: DollarSign,
    gradient: "gradient-primary",
    lastGenerated: "Jun 26, 2026",
  },
  {
    title: "Inventory Report",
    description: "Stock levels, conditions, and item movement tracking",
    icon: Package,
    gradient: "gradient-accent",
    lastGenerated: "Jun 25, 2026",
  },
  {
    title: "Crew Utilization",
    description: "Team assignments, availability, and hours worked",
    icon: Users,
    gradient: "gradient-success",
    lastGenerated: "Jun 24, 2026",
  },
  {
    title: "Project Status",
    description: "Phase progress, milestones, and risk assessment",
    icon: TrendingUp,
    gradient: "gradient-warm",
    lastGenerated: "Jun 26, 2026",
  },
  {
    title: "Logistics Overview",
    description: "Shipment tracking, delivery times, and costs",
    icon: BarChart3,
    gradient: "gradient-primary",
    lastGenerated: "Jun 23, 2026",
  },
  {
    title: "Time Tracking",
    description: "Crew hours, overtime, and scheduling efficiency",
    icon: Clock,
    gradient: "gradient-accent",
    lastGenerated: "Jun 22, 2026",
  },
];

const recentReports = [
  { name: "Q2 2026 Financial Summary", type: "Financial", date: "Jun 26, 2026", format: "PDF" },
  { name: "Eurovision Inventory Audit", type: "Inventory", date: "Jun 25, 2026", format: "XLSX" },
  { name: "Monthly Crew Report — June", type: "Crew", date: "Jun 24, 2026", format: "PDF" },
  { name: "Phantom Revival Budget Review", type: "Financial", date: "Jun 23, 2026", format: "PDF" },
  { name: "Dubai FW Logistics Plan", type: "Logistics", date: "Jun 22, 2026", format: "PDF" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Reports</h2>
          <p className="text-sm text-muted-foreground">
            Generate and view reports across all operations.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <BarChart3 className="h-4 w-4" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reportTypes.map((report) => (
          <div
            key={report.title}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${report.gradient}`}
              >
                <report.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-card-foreground">
                  {report.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {report.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {report.lastGenerated}
              </span>
              <span className="flex items-center gap-1 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Generate <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4">
          <h3 className="text-sm font-semibold text-card-foreground">
            Recent Reports
          </h3>
        </div>
        <div className="divide-y divide-border">
          {recentReports.map((report) => (
            <div
              key={report.name}
              className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-surface-hover"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                  <FileText className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {report.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {report.type} · {report.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                  {report.format}
                </span>
                <button className="rounded-lg p-2 text-muted-foreground hover:bg-surface-hover hover:text-foreground">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
