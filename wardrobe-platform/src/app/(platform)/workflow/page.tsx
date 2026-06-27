"use client";

import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react";

const phases = [
  {
    name: "Pre-Production",
    color: "from-blue-500 to-blue-600",
    tasks: [
      { name: "Client brief & requirements", status: "completed" },
      { name: "Mood board & design concepts", status: "completed" },
      { name: "Budget estimation", status: "completed" },
      { name: "Crew assignment", status: "in-progress" },
      { name: "Vendor sourcing", status: "pending" },
      { name: "Schedule planning", status: "pending" },
    ],
  },
  {
    name: "Production",
    color: "from-emerald-500 to-emerald-600",
    tasks: [
      { name: "Costume construction", status: "in-progress" },
      { name: "Fittings & alterations", status: "in-progress" },
      { name: "Quality control checks", status: "pending" },
      { name: "Inventory tagging & cataloging", status: "pending" },
      { name: "Flight case packing", status: "pending" },
    ],
  },
  {
    name: "Post-Production",
    color: "from-purple-500 to-purple-600",
    tasks: [
      { name: "Wardrobe return & inspection", status: "pending" },
      { name: "Cleaning & restoration", status: "pending" },
      { name: "Inventory reconciliation", status: "pending" },
      { name: "Damage assessment & repair", status: "pending" },
    ],
  },
  {
    name: "Close-Out",
    color: "from-amber-500 to-amber-600",
    tasks: [
      { name: "Final budget reconciliation", status: "pending" },
      { name: "Client sign-off", status: "pending" },
      { name: "Archive documentation", status: "pending" },
      { name: "Lessons learned report", status: "pending" },
    ],
  },
];

const statusIcons = {
  completed: <CheckCircle2 className="h-4 w-4 text-success" />,
  "in-progress": <Clock className="h-4 w-4 text-primary" />,
  pending: <Circle className="h-4 w-4 text-muted-foreground" />,
};

export default function WorkflowPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Phase Workflow</h2>
        <p className="text-sm text-muted-foreground">
          Track project phases from pre-production through close-out.
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {phases.map((phase, i) => (
          <div key={phase.name} className="flex items-center gap-2">
            <span
              className={`whitespace-nowrap rounded-full bg-gradient-to-r ${phase.color} px-4 py-1.5 text-xs font-medium text-white`}
            >
              {phase.name}
            </span>
            {i < phases.length - 1 && (
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {phases.map((phase) => {
          const completed = phase.tasks.filter(
            (t) => t.status === "completed"
          ).length;
          return (
            <div
              key={phase.name}
              className="rounded-xl border border-border bg-card"
            >
              <div className="border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {phase.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {completed}/{phase.tasks.length}
                  </span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-muted">
                  <div
                    className={`h-1 rounded-full bg-gradient-to-r ${phase.color} transition-all`}
                    style={{
                      width: `${(completed / phase.tasks.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="divide-y divide-border">
                {phase.tasks.map((task) => (
                  <div
                    key={task.name}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface-hover"
                  >
                    {statusIcons[task.status as keyof typeof statusIcons]}
                    <span
                      className={`text-sm ${
                        task.status === "completed"
                          ? "text-muted-foreground line-through"
                          : "text-card-foreground"
                      }`}
                    >
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
