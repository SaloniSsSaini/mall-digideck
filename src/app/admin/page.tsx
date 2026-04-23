"use client";

import Sidebar from "@/components/admin/Sidebar";
import Dashboard from "@/components/admin/Dashboard";

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}