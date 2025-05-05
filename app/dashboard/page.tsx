import React from "react";
import { auth, signOut } from "../../auth";

const page = async () => {

  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form action={async () => {
        "use server";
        await signOut({ redirectTo: "/auth/login", redirect: true });
      }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}

export default page