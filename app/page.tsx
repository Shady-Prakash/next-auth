import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
   <main className="flex h-full flex-col items-center justify-center bg-radial-[at_50%_75%] from-sky-300 via-blue-400 to-indigo-600 to-90%">
    <div className="space-y-6 text-center">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
        font.className
      )}>
       🔐 Auth
      </h1>
      <p className="text-white text-lg">A simple authentication service</p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Get started
          </Button>
        </LoginButton>
      </div>
    </div>
   </main>
  );
}