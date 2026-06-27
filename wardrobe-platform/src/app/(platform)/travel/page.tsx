"use client";

import {
  Plus,
  Search,
  Plane,
  Train,
  Car,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

const travels = [
  {
    id: 1,
    type: "flight",
    crew: "Sarah Mitchell",
    from: "London Heathrow (LHR)",
    to: "Malmö Sturup (MMX)",
    date: "2026-08-09",
    time: "08:30",
    project: "Eurovision 2026 Tour",
    status: "Booked",
    ref: "BA2841",
  },
  {
    id: 2,
    type: "flight",
    crew: "Maria Santos",
    from: "London Gatwick (LGW)",
    to: "Dubai Intl (DXB)",
    date: "2026-07-14",
    time: "22:15",
    project: "Dubai Fashion Week",
    status: "Booked",
    ref: "EK028",
  },
  {
    id: 3,
    type: "train",
    crew: "James Chen",
    from: "London Euston",
    to: "Manchester Piccadilly",
    date: "2026-07-05",
    time: "09:00",
    project: "Coldplay Tour",
    status: "Booked",
    ref: "VT1042",
  },
  {
    id: 4,
    type: "car",
    crew: "Aisha Khan",
    from: "London Office",
    to: "Elstree Studios",
    date: "2026-06-28",
    time: "06:30",
    project: "Netflix Crown S7",
    status: "Confirmed",
    ref: "CAR-0051",
  },
  {
    id: 5,
    type: "flight",
    crew: "Luke Harrison",
    from: "London Heathrow (LHR)",
    to: "Malmö Sturup (MMX)",
    date: "2026-08-09",
    time: "08:30",
    project: "Eurovision 2026 Tour",
    status: "Pending",
    ref: "—",
  },
  {
    id: 6,
    type: "flight",
    crew: "Elena Rossi",
    from: "Milan Malpensa (MXP)",
    to: "London Heathrow (LHR)",
    date: "2026-07-20",
    time: "14:45",
    project: "Phantom Revival",
    status: "Booked",
    ref: "AZ246",
  },
];

const typeIcons = {
  flight: Plane,
  train: Train,
  car: Car,
};

const statusColors: Record<string, string> = {
  Booked: "bg-emerald-500/10 text-emerald-400",
  Pending: "bg-amber-500/10 text-amber-400",
  Confirmed: "bg-blue-500/10 text-blue-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

export default function TravelPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Travel</h2>
          <p className="text-sm text-muted-foreground">
            Manage crew travel arrangements across all productions.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Plus className="h-4 w-4" />
          Book Travel
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search travel bookings..."
          className="h-9 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Type</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Crew Member</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Route</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Date & Time</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Project</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Ref</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {travels.map((trip) => {
              const Icon = typeIcons[trip.type as keyof typeof typeIcons];
              return (
                <tr
                  key={trip.id}
                  className="transition-colors hover:bg-surface-hover cursor-pointer"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                      <Icon className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm font-medium text-card-foreground">
                    {trip.crew}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-card-foreground">{trip.from.split(" (")[0]}</span>
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      <span className="text-card-foreground">{trip.to.split(" (")[0]}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3 text-sm text-card-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        {new Date(trip.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        {trip.time}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">
                    {trip.project}
                  </td>
                  <td className="px-5 py-3.5 text-sm font-mono text-muted-foreground">
                    {trip.ref}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        statusColors[trip.status]
                      }`}
                    >
                      {trip.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
