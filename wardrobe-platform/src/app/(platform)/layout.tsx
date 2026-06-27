"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? 68 : 240 }}
      >
        <Header />
        <main className="flex-1 overflow-y-auto p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
