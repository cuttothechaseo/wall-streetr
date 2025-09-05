"use client";

import {
  BarChart3,
  Calendar,
  Home,
  MessageSquare,
  Settings,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  useDashboard,
  type DashboardView,
} from "@/components/dashboard/DashboardContext";

// Navigation items for the finance networking app
const navigationItems = [
  {
    title: "Dashboard",
    view: "dashboard" as DashboardView,
    icon: Home,
  },
  {
    title: "Contacts",
    view: "contacts" as DashboardView,
    icon: Users,
  },
  {
    title: "Networking Goals",
    view: "goals" as DashboardView,
    icon: Target,
  },
  {
    title: "Analytics",
    view: "analytics" as DashboardView,
    icon: BarChart3,
  },
  {
    title: "Calendar",
    view: "calendar" as DashboardView,
    icon: Calendar,
  },
  {
    title: "Messages",
    view: "messages" as DashboardView,
    icon: MessageSquare,
  },
];

const settingsItems = [
  {
    title: "Settings",
    view: "settings" as DashboardView,
    icon: Settings,
  },
];

export function AppSidebar() {
  const { activeView, setActiveView } = useDashboard();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold" style={{ color: "#1e9df1" }}>
          Wall Streetr
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.view)}
                    isActive={activeView === item.view}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.view)}
                    isActive={activeView === item.view}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4"></SidebarFooter>
    </Sidebar>
  );
}
