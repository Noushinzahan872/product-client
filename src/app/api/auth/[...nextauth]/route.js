import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                console.log(credentials)
                try {
                    // Fetch user from backend by email
                    const res = await fetch(`http://localhost:5000/users/${email}`);
                    const data = await res.json();

                    if (!res.ok || !data.success || data.data.length === 0) {
                        console.error("User not found or error:", data.message);
                        return null;
                    }

                    const user = data.data; // Assuming data.data is an array
                    console.log(user)
                    // Check password
                    if (user.password === password) {
                        // Password matches, return user object
                        return {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            image: user.image,
                        };
                    } else {
                        console.error("Invalid password");
                        return null; // Password mismatch
                    }
                } catch (err) {
                    console.error("Error fetching user:", err);
                    return null;
                }
            },
        }),
    ],
   callbacks: {
    async session({ session, user, token }) {
        if(token){
            session.user.username=token.username
        }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
        if(user){
            token.username=user.username
        }
      return token
    },
    pages: {
        signIn: "/login", // custom login page
        error: "/login",  // redirect to login on error
    },
}};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
