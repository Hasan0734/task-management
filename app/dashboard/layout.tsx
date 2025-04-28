
import type React from "react";
import { Suspense } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import AppHeader from "@/components/dashboard/app-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <AppHeader/>
        <div className="p-4 md:p-6">
          <Suspense>{children}</Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
