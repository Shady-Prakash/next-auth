"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

const DashboardPage = () => {
  const user = useCurrentUser();

  return (
    <>
    <h1 className="font-bold">Dashboard Page</h1>
     <div className="space-y-3">
      {JSON.stringify(user)}
     </div>
    </>
  )
}

export default DashboardPage