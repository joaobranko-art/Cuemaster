"use client";

import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Receipt,
  CreditCard,
  PiggyBank,
  AlertTriangle,
} from "lucide-react";

const summaryCards = [
  {
    title: "Total Budget",
    value: "$1,150,000",
    change: "+12% vs last quarter",
    changeType: "positive",
    icon: DollarSign,
    gradient: "gradient-primary",
  },
  {
    title: "Total Spent",
    value: "$455,000",
    change: "39.6% utilized",
    changeType: "neutral",
    icon: CreditCard,
    gradient: "gradient-accent",
  },
  {
    title: "Remaining",
    value: "$695,000",
    change: "60.4% available",
    changeType: "positive",
    icon: PiggyBank,
    gradient: "gradient-success",
  },
  {
    title: "Over Budget",
    value: "1 Project",
    change: "Phantom Revival",
    changeType: "negative",
    icon: AlertTriangle,
    gradient: "gradient-warm",
  },
];

const projectBudgets = [
  {
    project: "Eurovision 2026 Tour",
    allocated: 220000,
    spent: 145000,
    categories: [
      { name: "Costumes", amount: 85000 },
      { name: "Materials", amount: 28000 },
      { name: "Crew", amount: 22000 },
      { name: "Logistics", amount: 10000 },
    ],
  },
  {
    project: "Dubai Fashion Week",
    allocated: 95000,
    spent: 38000,
    categories: [
      { name: "Costumes", amount: 18000 },
      { name: "Materials", amount: 9000 },
      { name: "Crew", amount: 7000 },
      { name: "Logistics", amount: 4000 },
    ],
  },
  {
    project: "Phantom Revival",
    allocated: 110000,
    spent: 105000,
    categories: [
      { name: "Costumes", amount: 55000 },
      { name: "Materials", amount: 22000 },
      { name: "Crew", amount: 18000 },
      { name: "Logistics", amount: 10000 },
    ],
  },
  {
    project: "Netflix Crown S7",
    allocated: 200000,
    spent: 190000,
    categories: [
      { name: "Costumes", amount: 95000 },
      { name: "Materials", amount: 42000 },
      { name: "Crew", amount: 33000 },
      { name: "Logistics", amount: 20000 },
    ],
  },
  {
    project: "Coldplay Tour",
    allocated: 350000,
    spent: 77000,
    categories: [
      { name: "Costumes", amount: 35000 },
      { name: "Materials", amount: 22000 },
      { name: "Crew", amount: 12000 },
      { name: "Logistics", amount: 8000 },
    ],
  },
];

const recentTransactions = [
  { desc: "Fabric supplier — Silk shipment", project: "Eurovision", amount: -12500, date: "Jun 26" },
  { desc: "Crew payment — Seamstress team", project: "Phantom", amount: -8200, date: "Jun 25" },
  { desc: "Client deposit — Coldplay", project: "Coldplay", amount: 75000, date: "Jun 24" },
  { desc: "Shipping — DHL Express to Dubai", project: "Dubai FW", amount: -3400, date: "Jun 23" },
  { desc: "Equipment rental — Sewing machines", project: "Eurovision", amount: -2100, date: "Jun 22" },
];

export default function BudgetPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Budget & Finance</h2>
        <p className="text-sm text-muted-foreground">
          Financial overview across all active productions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{card.title}</p>
                <p className="text-2xl font-bold text-card-foreground">{card.value}</p>
                <p
                  className={`text-xs font-medium ${
                    card.changeType === "positive"
                      ? "text-success"
                      : card.changeType === "negative"
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                >
                  {card.change}
                </p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.gradient}`}>
                <card.icon className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold text-card-foreground">
              Project Budgets
            </h3>
          </div>
          <div className="divide-y divide-border">
            {projectBudgets.map((pb) => {
              const pct = (pb.spent / pb.allocated) * 100;
              const overBudget = pct > 90;
              return (
                <div key={pb.project} className="px-5 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-card-foreground">
                      {pb.project}
                    </span>
                    <span className={`text-sm font-medium ${overBudget ? "text-destructive" : "text-card-foreground"}`}>
                      ${(pb.spent / 1000).toFixed(0)}K / ${(pb.allocated / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted mb-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        overBudget ? "bg-destructive" : "gradient-primary"
                      }`}
                      style={{ width: `${Math.min(pct, 100)}%` }}
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    {pb.categories.map((cat) => (
                      <span key={cat.name}>
                        {cat.name}: ${(cat.amount / 1000).toFixed(0)}K
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold text-card-foreground">
              Recent Transactions
            </h3>
          </div>
          <div className="divide-y divide-border">
            {recentTransactions.map((tx, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    tx.amount > 0 ? "bg-emerald-500/10" : "bg-red-500/10"
                  }`}
                >
                  {tx.amount > 0 ? (
                    <ArrowUpRight className="h-4 w-4 text-success" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-card-foreground truncate">
                    {tx.desc}
                  </p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
                <span
                  className={`text-sm font-medium ${
                    tx.amount > 0 ? "text-success" : "text-card-foreground"
                  }`}
                >
                  {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
