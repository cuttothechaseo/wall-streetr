"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type DashboardView =
  | "dashboard"
  | "contacts"
  | "goals"
  | "analytics"
  | "calendar"
  | "messages"
  | "settings";

interface DashboardContextType {
  activeView: DashboardView;
  setActiveView: (view: DashboardView) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useState<DashboardView>("dashboard");

  return (
    <DashboardContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
