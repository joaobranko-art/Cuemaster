"use client";

import {
  Globe,
  Users,
  FileText,
  MessageSquare,
  Eye,
  ExternalLink,
  Shield,
  Clock,
} from "lucide-react";

const clients = [
  {
    id: 1,
    name: "EBU Productions",
    project: "Eurovision 2026 Tour",
    contactName: "Henrik Andersson",
    contactEmail: "h.andersson@ebu.ch",
    portalAccess: true,
    lastLogin: "2 hours ago",
    documentsShared: 14,
    messagesUnread: 2,
  },
  {
    id: 2,
    name: "DFW Agency",
    project: "Dubai Fashion Week",
    contactName: "Fatima Al-Rashid",
    contactEmail: "fatima@dfwagency.ae",
    portalAccess: true,
    lastLogin: "1 day ago",
    documentsShared: 8,
    messagesUnread: 0,
  },
  {
    id: 3,
    name: "LW Theatres",
    project: "Phantom Revival",
    contactName: "Oliver West",
    contactEmail: "o.west@lwtheatres.co.uk",
    portalAccess: true,
    lastLogin: "3 hours ago",
    documentsShared: 22,
    messagesUnread: 1,
  },
  {
    id: 4,
    name: "Left Bank Pictures",
    project: "Netflix Crown S7",
    contactName: "Emma Crawford",
    contactEmail: "e.crawford@leftbank.co.uk",
    portalAccess: true,
    lastLogin: "5 days ago",
    documentsShared: 31,
    messagesUnread: 0,
  },
  {
    id: 5,
    name: "Live Nation",
    project: "Coldplay Tour",
    contactName: "Marcus Phillips",
    contactEmail: "m.phillips@livenation.com",
    portalAccess: false,
    lastLogin: "Never",
    documentsShared: 3,
    messagesUnread: 0,
  },
];

export default function ClientPortalPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Client Portal</h2>
        <p className="text-sm text-muted-foreground">
          Manage client access, communications, and shared documents.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">
                {clients.length}
              </p>
              <p className="text-sm text-muted-foreground">Active Clients</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">78</p>
              <p className="text-sm text-muted-foreground">Documents Shared</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-warm">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">3</p>
              <p className="text-sm text-muted-foreground">Unread Messages</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="border-b border-border px-5 py-4">
          <h3 className="text-sm font-semibold text-card-foreground">
            Client Accounts
          </h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Client
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Project
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Portal Access
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Last Login
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Docs
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Messages
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {clients.map((client) => (
              <tr
                key={client.id}
                className="transition-colors hover:bg-surface-hover"
              >
                <td className="px-5 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {client.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {client.contactName}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">
                  {client.project}
                </td>
                <td className="px-5 py-3.5">
                  {client.portalAccess ? (
                    <span className="flex items-center gap-1 text-xs text-success">
                      <Shield className="h-3 w-3" /> Enabled
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" /> Disabled
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {client.lastLogin}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">
                  {client.documentsShared}
                </td>
                <td className="px-5 py-3.5">
                  {client.messagesUnread > 0 ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                      {client.messagesUnread}
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-5 py-3.5">
                  <button className="flex items-center gap-1 text-xs text-primary hover:underline">
                    Open <ExternalLink className="h-3 w-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
