"use client";

import {
  Plus,
  Search,
  Users,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  CheckCircle2,
  Clock,
} from "lucide-react";

const crewMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Head of Wardrobe",
    department: "Wardrobe",
    project: "Eurovision 2026 Tour",
    status: "On Assignment",
    email: "sarah.m@cuemaster.io",
    phone: "+44 7700 100001",
    location: "London",
    avatar: "SM",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Costume Designer",
    department: "Design",
    project: "Phantom Revival",
    status: "On Assignment",
    email: "james.c@cuemaster.io",
    phone: "+44 7700 100002",
    location: "London",
    avatar: "JC",
  },
  {
    id: 3,
    name: "Maria Santos",
    role: "Seamstress Lead",
    department: "Wardrobe",
    project: "Dubai Fashion Week",
    status: "On Assignment",
    email: "maria.s@cuemaster.io",
    phone: "+971 50 100003",
    location: "Dubai",
    avatar: "MS",
  },
  {
    id: 4,
    name: "Tom Baker",
    role: "Logistics Coordinator",
    department: "Operations",
    project: null,
    status: "Available",
    email: "tom.b@cuemaster.io",
    phone: "+44 7700 100004",
    location: "London",
    avatar: "TB",
  },
  {
    id: 5,
    name: "Aisha Khan",
    role: "Wardrobe Dresser",
    department: "Wardrobe",
    project: "Netflix Crown S7",
    status: "On Assignment",
    email: "aisha.k@cuemaster.io",
    phone: "+44 7700 100005",
    location: "Elstree",
    avatar: "AK",
  },
  {
    id: 6,
    name: "David Osei",
    role: "Costume Maker",
    department: "Wardrobe",
    project: "Coldplay Tour",
    status: "On Assignment",
    email: "david.o@cuemaster.io",
    phone: "+44 7700 100006",
    location: "Manchester",
    avatar: "DO",
  },
  {
    id: 7,
    name: "Elena Rossi",
    role: "Textile Specialist",
    department: "Materials",
    project: null,
    status: "Available",
    email: "elena.r@cuemaster.io",
    phone: "+39 340 100007",
    location: "Milan",
    avatar: "ER",
  },
  {
    id: 8,
    name: "Luke Harrison",
    role: "Inventory Manager",
    department: "Operations",
    project: "Eurovision 2026 Tour",
    status: "On Assignment",
    email: "luke.h@cuemaster.io",
    phone: "+44 7700 100008",
    location: "London",
    avatar: "LH",
  },
];

const gradients = [
  "gradient-primary",
  "gradient-accent",
  "gradient-success",
  "gradient-warm",
];

export default function CrewPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Crew</h2>
          <p className="text-sm text-muted-foreground">
            {crewMembers.length} team members · {crewMembers.filter((c) => c.status === "Available").length} available
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search crew..."
          className="h-9 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {crewMembers.map((member, i) => (
          <div
            key={member.id}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    gradients[i % gradients.length]
                  } text-xs font-bold text-white`}
                >
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <button className="rounded-lg p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-surface-hover group-hover:opacity-100">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  member.status === "Available"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-blue-500/10 text-blue-400"
                }`}
              >
                {member.status === "Available" ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <Clock className="h-3 w-3" />
                )}
                {member.status}
              </span>
              {member.project && (
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {member.project}
                </p>
              )}
            </div>

            <div className="mt-4 space-y-1.5 border-t border-border pt-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 shrink-0" />
                <span>{member.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3 w-3 shrink-0" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="h-3 w-3 shrink-0" />
                <span>{member.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
