import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import Navbar from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";


const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const session = await auth();

  return (
  <SessionProvider session={session}>
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar/>
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar/>
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
  </SessionProvider>
  );
}

export default DashboardLayout;