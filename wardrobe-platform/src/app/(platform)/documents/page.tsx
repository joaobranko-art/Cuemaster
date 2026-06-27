"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  FileText,
  Image,
  File,
  FolderOpen,
  Download,
  MoreHorizontal,
  Calendar,
  User,
  Upload,
} from "lucide-react";

const folders = [
  { name: "Eurovision 2026", count: 24 },
  { name: "Dubai Fashion Week", count: 12 },
  { name: "Phantom Revival", count: 31 },
  { name: "Netflix Crown S7", count: 18 },
  { name: "Coldplay Tour", count: 8 },
  { name: "Templates", count: 15 },
];

const documents = [
  {
    id: 1,
    name: "Eurovision Costume Design Brief.pdf",
    type: "pdf",
    project: "Eurovision 2026",
    size: "2.4 MB",
    modified: "Jun 26, 2026",
    author: "Sarah Mitchell",
  },
  {
    id: 2,
    name: "Dubai FW Budget Proposal.xlsx",
    type: "spreadsheet",
    project: "Dubai Fashion Week",
    size: "1.1 MB",
    modified: "Jun 25, 2026",
    author: "Tom Baker",
  },
  {
    id: 3,
    name: "Phantom Act II Costume Sketches.png",
    type: "image",
    project: "Phantom Revival",
    size: "8.7 MB",
    modified: "Jun 24, 2026",
    author: "James Chen",
  },
  {
    id: 4,
    name: "Crown S7 Wardrobe Schedule.pdf",
    type: "pdf",
    project: "Netflix Crown S7",
    size: "520 KB",
    modified: "Jun 23, 2026",
    author: "Aisha Khan",
  },
  {
    id: 5,
    name: "Crew Contract Template.docx",
    type: "document",
    project: "Templates",
    size: "180 KB",
    modified: "Jun 20, 2026",
    author: "Admin",
  },
  {
    id: 6,
    name: "LED Suit Technical Specs.pdf",
    type: "pdf",
    project: "Coldplay Tour",
    size: "3.2 MB",
    modified: "Jun 18, 2026",
    author: "David Osei",
  },
  {
    id: 7,
    name: "Insurance Certificate 2026.pdf",
    type: "pdf",
    project: "Templates",
    size: "890 KB",
    modified: "Jun 15, 2026",
    author: "Admin",
  },
];

const typeIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  spreadsheet: File,
  image: Image,
  document: FileText,
};

export default function DocumentsPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Documents</h2>
          <p className="text-sm text-muted-foreground">
            Centralized document management for all productions.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Upload className="h-4 w-4" />
          Upload
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search documents..."
          className="h-9 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Folders</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {folders.map((folder) => (
            <button
              key={folder.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
            >
              <FolderOpen className="h-8 w-8 text-primary" />
              <span className="text-xs font-medium text-card-foreground text-center">
                {folder.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {folder.count} files
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="border-b border-border px-5 py-4">
          <h3 className="text-sm font-semibold text-card-foreground">
            Recent Documents
          </h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Name
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Project
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Modified
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Author
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Size
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {documents.map((doc) => {
              const Icon = typeIcons[doc.type] ?? FileText;
              return (
                <tr
                  key={doc.id}
                  className="transition-colors hover:bg-surface-hover cursor-pointer"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                        <Icon className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <span className="text-sm font-medium text-card-foreground">
                        {doc.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">
                    {doc.project}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {doc.modified}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="h-3 w-3" /> {doc.author}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    {doc.size}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-hover hover:text-foreground">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-hover hover:text-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
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
