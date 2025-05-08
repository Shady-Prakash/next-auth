"use client";

import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const session = useSession();
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  console.log(JSON.stringify(session))
  
  const clickHandler = () => {
    logout();
  }


  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput/>
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2"/>
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/admin/courses">
            <Button size="sm" variant="ghost">
              Admin mode
            </Button>
          </Link>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={clickHandler}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}