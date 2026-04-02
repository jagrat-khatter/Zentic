import { getProviders, signIn, signOut } from "next-auth/react";
import CredentialsProvider from "next-auth/providers/credentials";
import Apple from "next-auth/providers/apple";
import Google from "next-auth/providers/google";
import Signup from "../signup/page";
type CustomUser = {
    id: String,
    username: String,
    role: String,
    email: String
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials :{
                username : {label: "Username" , type: "text" , placeholder: "Paul Smith"} ,
                emal : {label: "Email" , type: "text" , placeholder: "paulsmith@gmail.com"},
                password : {label: "Password" , type: "password"} 
            },
            async authorize(credentials , req){
                
                const user =  {
                    id : "1",
                    username : "Jagrat",
                    email : "jkhatter@gmail.com"
                }
                if(user) return user;
                else return null;
            }
        }),
        Apple({
            clientId: process.env.APPLE_ID!,
            clientSecret: process.env.APPLE_SECRET!
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          })
    ],
    callbacks : {
        async jwt({token ,user} : any){
            if(user){
                const u = user as unknown as CustomUser;
                token.id = u.id;
                token.username = u.username;
                token.role = u.role;
            }

            return token;
        },
        async session({session , user , token}: any){
            if(token){

                session.user.id = token.id;
                session.user.username = token.username;
                session.user.role = token.role;
            }

            return session;
        }
    },
    pages : {
        signIn: "/signin",
    }
}