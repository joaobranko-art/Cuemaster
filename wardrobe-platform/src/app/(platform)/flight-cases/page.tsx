"use client";

import {
  Plus,
  Search,
  Package,
  MapPin,
  Truck,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";

const cases = [
  {
    id: "FC-001",
    name: "Eurovision Main Costumes A",
    project: "Eurovision 2026 Tour",
    items: 24,
    weight: "48kg",
    location: "London Warehouse",
    status: "Packed",
    destination: "Malmö Arena",
  },
  {
    id: "FC-002",
    name: "Eurovision Main Costumes B",
    project: "Eurovision 2026 Tour",
    items: 18,
    weight: "35kg",
    location: "In Transit",
    status: "Shipping",
    destination: "Malmö Arena",
  },
  {
    id: "FC-003",
    name: "Phantom — Act I Costumes",
    project: "Phantom Revival",
    items: 32,
    weight: "62kg",
    location: "Her Majesty's Theatre",
    status: "Deployed",
    destination: "Her Majesty's Theatre",
  },
  {
    id: "FC-004",
    name: "Crown S7 — Royal Gowns",
    project: "Netflix Crown S7",
    items: 15,
    weight: "28kg",
    location: "Elstree Studios",
    status: "Deployed",
    destination: "Elstree Studios",
  },
  {
    id: "FC-005",
    name: "Dubai FW — Evening Collection",
    project: "Dubai Fashion Week",
    items: 42,
    weight: "55kg",
    location: "London Warehouse",
    status: "Packing",
    destination: "DIFC, Dubai",
  },
  {
    id: "FC-006",
    name: "Coldplay — LED Suits",
    project: "Coldplay Tour",
    items: 8,
    weight: "22kg",
    location: "Production Lab",
    status: "Preparing",
    destination: "Wembley Stadium",
  },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  Packed: { color: "bg-blue-500/10 text-blue-400", icon: <Package className="h-3 w-3" /> },
  Shipping: { color: "bg-purple-500/10 text-purple-400", icon: <Truck className="h-3 w-3" /> },
  Deployed: { color: "bg-emerald-500/10 text-emerald-400", icon: <CheckCircle2 className="h-3 w-3" /> },
  Packing: { color: "bg-amber-500/10 text-amber-400", icon: <Clock className="h-3 w-3" /> },
  Preparing: { color: "bg-orange-500/10 text-orange-400", icon: <AlertTriangle className="h-3 w-3" /> },
};

export default function FlightCasesPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Flight Cases</h2>
          <p className="text-sm text-muted-foreground">
            Track and manage wardrobe shipping cases across all productions.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Case
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search flight cases..."
          className="h-9 w-full max-w-md rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((fc) => {
          const cfg = statusConfig[fc.status];
          return (
            <div
              key={fc.id}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {fc.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{fc.id}</p>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg?.color}`}
                >
                  {cfg?.icon} {fc.status}
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Project</span>
                  <span className="text-card-foreground">{fc.project}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Items</span>
                  <span className="text-card-foreground">{fc.items}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Weight</span>
                  <span className="text-card-foreground">{fc.weight}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span>{fc.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-3 w-3 shrink-0" />
                  <span>{fc.destination}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
