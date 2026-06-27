"use client";

import { useState } from "react";
import {
  Sparkles,
  Upload,
  Link2,
  Image,
  Palette,
  Layout,
  Type,
  Grid3x3,
  Layers,
  Wand2,
  Plus,
  ArrowRight,
  Eye,
  Save,
  MessageSquare,
} from "lucide-react";

const inspirationProjects = [
  {
    id: 1,
    name: "Dashboard Redesign",
    references: 3,
    components: 8,
    lastEdited: "2 hours ago",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Client Portal UI",
    references: 5,
    components: 12,
    lastEdited: "1 day ago",
    status: "Completed",
  },
  {
    id: 3,
    name: "Inventory Management",
    references: 2,
    components: 6,
    lastEdited: "3 days ago",
    status: "Draft",
  },
];

const analysisCapabilities = [
  {
    icon: Layout,
    title: "Layout Hierarchy",
    description: "Extract page structure, grid systems, and content flow",
  },
  {
    icon: Palette,
    title: "Color Palette",
    description: "Identify primary, secondary, and accent colors",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Detect font families, sizes, weights, and line heights",
  },
  {
    icon: Grid3x3,
    title: "Components",
    description: "Identify cards, tables, forms, and UI patterns",
  },
  {
    icon: Layers,
    title: "Navigation",
    description: "Extract nav patterns, sidebars, and menu structures",
  },
  {
    icon: Sparkles,
    title: "Interaction Styles",
    description: "Detect hover states, transitions, and micro-interactions",
  },
];

export default function AIStudioPage() {
  const [activeTab, setActiveTab] = useState<"create" | "projects">("create");
  const [urlInput, setUrlInput] = useState("");
  const [promptInput, setPromptInput] = useState("");

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">
              AI Design Studio
            </h2>
            <span className="rounded-full gradient-primary px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
              Beta
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Analyze design references, generate layouts, and build reusable
            components with AI.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("create")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "create"
              ? "bg-primary text-primary-foreground"
              : "bg-surface border border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          Create New
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "projects"
              ? "bg-primary text-primary-foreground"
              : "bg-surface border border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          My Projects ({inspirationProjects.length})
        </button>
      </div>

      {activeTab === "create" ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="mb-4 text-sm font-semibold text-card-foreground flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-primary" />
                  Paste Website URL
                </h3>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com"
                    className="h-10 flex-1 rounded-lg border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                  <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
                    <Wand2 className="h-4 w-4" />
                    Analyze
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center transition-colors hover:border-primary/30 hover:bg-surface-hover cursor-pointer">
                <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                <h3 className="mt-3 text-sm font-semibold text-card-foreground">
                  Upload References
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Screenshots, mockups, or design files
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  PNG, JPG, SVG, or PDF up to 25MB
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-surface-hover">
                  <Image className="h-4 w-4" />
                  Choose Files
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-card-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Generate from Prompt
              </h3>
              <textarea
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Describe the UI you want to create... e.g., 'A dashboard page with project overview cards, a budget chart, and a recent activity feed. Use dark theme with blue accents.'"
                rows={6}
                className="w-full rounded-lg border border-border bg-surface p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
              />
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  AI will generate an editable layout following the design system.
                </p>
                <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
                  <Sparkles className="h-4 w-4" />
                  Generate
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              AI Analysis Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {analysisCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <cap.icon className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-card-foreground">
                      {cap.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <button className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card p-8 transition-all hover:border-primary/30 hover:bg-surface-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Plus className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-card-foreground">
                New Project
              </span>
            </button>

            {inspirationProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {project.name}
                    </h3>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : project.status === "In Progress"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Image className="h-3 w-3" /> {project.references} references
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="h-3 w-3" /> {project.components} components
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-xs text-muted-foreground">
                    {project.lastEdited}
                  </span>
                  <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-hover hover:text-foreground">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-hover hover:text-foreground">
                      <Save className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
