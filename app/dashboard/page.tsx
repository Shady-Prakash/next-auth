import React from "react";
import { auth, signOut } from "../../auth";

const page = async () => {
  const session = await auth();
  console.log("SESSION", JSON.stringify(session));

  return (
    <div>
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}

export default page