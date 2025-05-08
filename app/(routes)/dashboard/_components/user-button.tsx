import { ExtendedUser } from "@/next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logout } from "@/actions/logout";

import { LogOut, User } from "lucide-react";
import { redirect } from "next/navigation";

interface UserProps {
  user?: ExtendedUser,
}

const UserButton = (
  { user }: UserProps
) => {

  const clickHandler = () => {
    logout();
  }

  const profileHandler = () => {
    redirect('/dashboard/profile')
  }

  const getUserInitials = (name = ' ') => {
    const splitUserName = name?.split(' ') || ' ';
    const firstName = splitUserName?.at(0) || ' ';
    const lastName = splitUserName?.at(-1) || ' ';
    const firstNameInitial = firstName?.at(0)?.toUpperCase() || ' ';
    const lastNameInitial = lastName?.at(0)?.toUpperCase() || ' ';
    
    return firstNameInitial + lastNameInitial
  }
  
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={user?.image || " "} />
            <AvatarFallback className="bg-slate-500">
              <span className="text-white font-bold">
                {getUserInitials(user?.name  || ' ')}
              </span>
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuItem className="cursor-pointer text-xs font-semibold text-slate-500 hover:text-slate-600" onClick={profileHandler}>
            <User className="h-4 mr-1 hover:text-slate-600" />
              My Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={clickHandler} className="cursor-pointer text-xs font-semibold text-slate-500 hover:text-slate-600">
            <LogOut className="h-4 mr-1 hover:text-slate-600" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </>
  )
}

export default UserButton