"use client";

import {
  Plus,
  Search,
  Hotel,
  MapPin,
  Calendar,
  Users,
  Star,
  ExternalLink,
} from "lucide-react";

const bookings = [
  {
    id: 1,
    hotel: "The Savoy",
    city: "London",
    country: "UK",
    project: "Phantom Revival",
    guests: 4,
    checkIn: "2026-07-01",
    checkOut: "2026-07-14",
    rate: "£320/night",
    status: "Confirmed",
    stars: 5,
  },
  {
    id: 2,
    hotel: "Marriott Harbour Hotel",
    city: "Malmö",
    country: "Sweden",
    project: "Eurovision 2026 Tour",
    guests: 8,
    checkIn: "2026-08-10",
    checkOut: "2026-08-25",
    rate: "€195/night",
    status: "Confirmed",
    stars: 4,
  },
  {
    id: 3,
    hotel: "Address Downtown",
    city: "Dubai",
    country: "UAE",
    project: "Dubai Fashion Week",
    guests: 6,
    checkIn: "2026-07-15",
    checkOut: "2026-07-22",
    rate: "$280/night",
    status: "Pending",
    stars: 5,
  },
  {
    id: 4,
    hotel: "Holiday Inn Elstree",
    city: "Borehamwood",
    country: "UK",
    project: "Netflix Crown S7",
    guests: 3,
    checkIn: "2026-06-01",
    checkOut: "2026-07-15",
    rate: "£110/night",
    status: "Active",
    stars: 3,
  },
  {
    id: 5,
    hotel: "Novotel Wembley",
    city: "London",
    country: "UK",
    project: "Coldplay Tour",
    guests: 5,
    checkIn: "2026-09-01",
    checkOut: "2026-09-10",
    rate: "£145/night",
    status: "Pending",
    stars: 4,
  },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-emerald-500/10 text-emerald-400",
  Pending: "bg-amber-500/10 text-amber-400",
  Active: "bg-blue-500/10 text-blue-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

export default function AccommodationPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Accommodation</h2>
          <p className="text-sm text-muted-foreground">
            Manage crew accommodation bookings for all productions.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Booking
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search bookings..."
          className="h-9 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {booking.hotel}
                </h3>
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: booking.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  statusColors[booking.status]
                }`}
              >
                {booking.status}
              </span>
            </div>

            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>
                  {booking.city}, {booking.country}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Hotel className="h-3.5 w-3.5 shrink-0" />
                <span>{booking.project}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                <span>
                  {new Date(booking.checkIn).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}{" "}
                  —{" "}
                  {new Date(booking.checkOut).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-3.5 w-3.5 shrink-0" />
                <span>{booking.guests} guests</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-medium text-card-foreground">
                {booking.rate}
              </span>
              <button className="flex items-center gap-1 text-xs text-primary hover:underline">
                Details <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
