"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Shirt,
  Tag,
  MoreHorizontal,
  Grid3x3,
  List,
} from "lucide-react";

const categories = [
  "All",
  "Costumes",
  "Accessories",
  "Footwear",
  "Headwear",
  "Undergarments",
  "Outerwear",
];

const items = [
  {
    id: "WI-001",
    name: "Victorian Evening Gown",
    category: "Costumes",
    project: "Phantom Revival",
    status: "In Use",
    condition: "Excellent",
    size: "UK 10",
    color: "Burgundy",
    quantity: 1,
  },
  {
    id: "WI-002",
    name: "Military Dress Uniform",
    category: "Costumes",
    project: "Netflix Crown S7",
    status: "In Storage",
    condition: "Good",
    size: "UK 40R",
    color: "Navy",
    quantity: 3,
  },
  {
    id: "WI-003",
    name: "Sequin Stage Jacket",
    category: "Outerwear",
    project: "Eurovision 2026",
    status: "In Use",
    condition: "Excellent",
    size: "M",
    color: "Gold",
    quantity: 5,
  },
  {
    id: "WI-004",
    name: "Crystal Tiara Set",
    category: "Accessories",
    project: "Dubai Fashion Week",
    status: "In Transit",
    condition: "Excellent",
    size: "One Size",
    color: "Silver",
    quantity: 8,
  },
  {
    id: "WI-005",
    name: "Leather Stage Boots",
    category: "Footwear",
    project: "Coldplay Tour",
    status: "In Storage",
    condition: "Fair",
    size: "EU 42",
    color: "Black",
    quantity: 12,
  },
  {
    id: "WI-006",
    name: "Silk Cravat Collection",
    category: "Accessories",
    project: "Phantom Revival",
    status: "In Use",
    condition: "Good",
    size: "One Size",
    color: "Assorted",
    quantity: 20,
  },
  {
    id: "WI-007",
    name: "LED Wired Costume",
    category: "Costumes",
    project: "Coldplay Tour",
    status: "In Production",
    condition: "New",
    size: "Custom",
    color: "Multi",
    quantity: 4,
  },
  {
    id: "WI-008",
    name: "Period Corset",
    category: "Undergarments",
    project: "Netflix Crown S7",
    status: "In Use",
    condition: "Good",
    size: "UK 12",
    color: "Ivory",
    quantity: 6,
  },
];

const statusColors: Record<string, string> = {
  "In Use": "bg-emerald-500/10 text-emerald-400",
  "In Storage": "bg-blue-500/10 text-blue-400",
  "In Transit": "bg-purple-500/10 text-purple-400",
  "In Production": "bg-amber-500/10 text-amber-400",
};

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState<"grid" | "list">("list");

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Wardrobe Inventory
          </h2>
          <p className="text-sm text-muted-foreground">
            {items.length} items across {categories.length - 1} categories.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
          <Plus className="h-4 w-4" />
          Add Item
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search inventory by name, ID, project..."
            className="h-9 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
        </div>
        <button className="flex h-9 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm text-muted-foreground hover:bg-surface-hover">
          <Filter className="h-4 w-4" />
          Filter
        </button>
        <div className="flex rounded-lg border border-border bg-surface">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-l-lg transition-colors ${
              view === "grid"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Grid3x3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-r-lg transition-colors ${
              view === "list"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Item
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Category
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Project
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Status
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Size
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Qty
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                Condition
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="transition-colors hover:bg-surface-hover cursor-pointer"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                      <Shirt className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Tag className="h-3 w-3" /> {item.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">
                  {item.category}
                </td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">
                  {item.project}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusColors[item.status] ?? ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-muted-foreground">
                  {item.size}
                </td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">
                  {item.quantity}
                </td>
                <td className="px-5 py-3.5 text-sm text-muted-foreground">
                  {item.condition}
                </td>
                <td className="px-5 py-3.5">
                  <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-hover">
                    <MoreHorizontal className="h-4 w-4" />
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
