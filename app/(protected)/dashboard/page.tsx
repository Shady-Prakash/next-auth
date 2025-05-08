"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

const DashboardPage = () => {
  const user = useCurrentUser();

  return (
    <>
     {JSON.stringify(user)}
    </>
  )
}

export default DashboardPage