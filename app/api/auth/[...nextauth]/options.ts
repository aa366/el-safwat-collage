import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label : "email",
                    type: "email",
                    placeholder: "Enter your Email"
                },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials , req) {
                console.log(req);
                
                const user = { id: 0, name: "Abdelwahab", password: "1111" }
                if ( credentials?.email === user.name &&  credentials?.password === user.password) {
                    return user

                } else {
                    return null
                }
            },
        }),
    ],
};
