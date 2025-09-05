"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useDashboard } from "@/components/dashboard/DashboardContext";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Contacts } from "@/components/dashboard/Contacts";
import { Goals } from "@/components/dashboard/Goals";
import { Messages } from "@/components/dashboard/Messages";
import { Header } from "@/components/layout/Header";

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  );
}

function DashboardContent() {
  const { activeView } = useDashboard();

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "contacts":
        return <Contacts />;
      case "goals":
        return <Goals />;
      case "analytics":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">
                View your networking statistics and insights.
              </p>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Analytics view coming soon...
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
              <p className="text-muted-foreground">
                Manage your networking events and meetings.
              </p>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Calendar view coming soon...
            </div>
          </div>
        );
      case "messages":
        return <Messages />;
      case "settings":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">
                Configure your account and preferences.
              </p>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Settings view coming soon...
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return renderView();
}
