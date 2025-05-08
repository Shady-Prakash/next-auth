"use client";

import { BarChart, Layout, Settings, UserCog} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: Settings,
    label: "Settings",
    href: "#"
  },
];

const adminRoutes = [
  {
    icon: UserCog,
    label: "Admin",
    href: "/dashboard/admin/server"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/dashboard/admin/analytics"
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/admin/settings"
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/dashboard/admin");
  
  const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}