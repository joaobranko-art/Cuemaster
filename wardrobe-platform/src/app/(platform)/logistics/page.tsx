"use client";

import {
  Truck,
  Package,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Globe,
} from "lucide-react";

const shipments = [
  {
    id: "SHP-001",
    description: "Eurovision costume cases (3x)",
    from: "London Warehouse",
    to: "Malmö Arena, Sweden",
    carrier: "DHL Express",
    tracking: "DHL-2026084512",
    status: "In Transit",
    eta: "2026-08-12",
    weight: "145 kg",
    items: 3,
  },
  {
    id: "SHP-002",
    description: "Dubai FW — Evening collection",
    from: "London Warehouse",
    to: "DIFC, Dubai, UAE",
    carrier: "FedEx International",
    tracking: "FDX-7819004521",
    status: "Customs",
    eta: "2026-07-18",
    weight: "55 kg",
    items: 1,
  },
  {
    id: "SHP-003",
    description: "Phantom Revival replacements",
    from: "Milan Studio",
    to: "Her Majesty's Theatre, London",
    carrier: "UPS",
    tracking: "UPS-1Z9920041",
    status: "Delivered",
    eta: "2026-06-25",
    weight: "22 kg",
    items: 1,
  },
  {
    id: "SHP-004",
    description: "Crown S7 — Period accessories",
    from: "Paris Supplier",
    to: "Elstree Studios, UK",
    carrier: "TNT Express",
    tracking: "TNT-GB20268845",
    status: "Processing",
    eta: "2026-07-02",
    weight: "12 kg",
    items: 2,
  },
  {
    id: "SHP-005",
    description: "Coldplay LED suit components",
    from: "Shenzhen Factory",
    to: "Production Lab, London",
    carrier: "DHL Express",
    tracking: "DHL-2026092103",
    status: "In Transit",
    eta: "2026-07-08",
    weight: "35 kg",
    items: 4,
  },
];

const statusConfig: Record<
  string,
  { color: string; icon: React.ReactNode }
> = {
  "In Transit": {
    color: "bg-blue-500/10 text-blue-400",
    icon: <Truck className="h-3 w-3" />,
  },
  Customs: {
    color: "bg-amber-500/10 text-amber-400",
    icon: <Globe className="h-3 w-3" />,
  },
  Delivered: {
    color: "bg-emerald-500/10 text-emerald-400",
    icon: <CheckCircle2 className="h-3 w-3" />,
  },
  Processing: {
    color: "bg-purple-500/10 text-purple-400",
    icon: <Clock className="h-3 w-3" />,
  },
  Delayed: {
    color: "bg-red-500/10 text-red-400",
    icon: <AlertTriangle className="h-3 w-3" />,
  },
};

export default function LogisticsPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Logistics</h2>
        <p className="text-sm text-muted-foreground">
          Track shipments and manage logistics across all productions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[
          { label: "Active Shipments", value: "3", color: "gradient-primary" },
          { label: "In Customs", value: "1", color: "gradient-warm" },
          { label: "Delivered (Month)", value: "8", color: "gradient-success" },
          { label: "Pending", value: "2", color: "gradient-accent" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20"
          >
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-card-foreground">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {shipments.map((shipment) => {
          const cfg = statusConfig[shipment.status];
          return (
            <div
              key={shipment.id}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {shipment.description}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {shipment.id} · {shipment.carrier}
                    </p>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg?.color}`}
                >
                  {cfg?.icon} {shipment.status}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{shipment.from}</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                <div className="flex items-center gap-2 text-card-foreground font-medium">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{shipment.to}</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> ETA:{" "}
                  {new Date(shipment.eta).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span>{shipment.weight}</span>
                <span>{shipment.items} case(s)</span>
                <span className="font-mono">{shipment.tracking}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
