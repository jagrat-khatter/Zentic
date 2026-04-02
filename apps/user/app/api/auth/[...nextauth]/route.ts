import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"
import { NextRequest } from "next/server"

async function handler(req: NextRequest , context: any){

    // In app router advanced initialization Next auth takes 3 arguments
    return await NextAuth(req, context, authOptions)
}

export { handler as GET, handler as POST }