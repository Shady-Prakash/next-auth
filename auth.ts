import NextAuth from "next-auth"
import { UserRole } from "@/lib/generated/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/lib/user"

export const { 
  handlers, 
  signIn, 
  signOut, 
  auth 
} = NextAuth({
  callbacks: {
    // async signIn({ user }) {
    //   const existingUser = await getUserById(user.id ?? "");

    //   if (!existingUser || !existingUser.emailVerified) {
    //     return false
    //   }

    //   return true;
    // },
    async session({token, session}) {
       if(token.sub && session.user) {
         session.user.id = token.sub;
       }

       if (token.role && session.user) {
        session.user.role = token.role as UserRole
       }

      return session;
    },
    async jwt({ token, account }) {
      console.log({account})
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig
})

