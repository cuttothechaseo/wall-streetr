import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { DashboardProvider } from "@/components/dashboard/DashboardContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 w-full">
          <div className="flex h-full">
            <div className="flex-1">
              <div className="border-b p-4">
                <SidebarTrigger />
              </div>
              <div className="p-6">{children}</div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </DashboardProvider>
  );
}
