"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import UserButton from "@/app/(routes)/dashboard/_components/user-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/dashboard/admin");
  const isProfilePage = pathname?.includes("/profile");
  const isSearchPage = pathname === "/search";

  const user = useCurrentUser();

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput/>
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isProfilePage ? (
          <Link href="/dashboard">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-1"/>
                Exit
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard/admin/server">
            <Button size="sm" variant="ghost">
             {`${user?.role ==="ADMIN" ? "Admin": user?.role==="SUPER_ADMIN" ? "Super Admin" : "User"} mode`}
            </Button>
          </Link>
        )}
        <UserButton user={user}/>
      </div>
    </>
  )
}