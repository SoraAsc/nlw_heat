import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const client_id = "seuId"

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    isSigningIn: boolean;
    signInUrl: string;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
    children: ReactNode;
}



export function AuthProvider(props: AuthProvider) {

    const [user, setUser] = useState<User | null>(null);

    const [isSigningIn, setIsSigninIn] = useState(false);

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}`;

    async function signIn(githubCode: string) {
        setIsSigninIn(true);
        try {

            const response = await api.post<AuthResponse>('authenticate', {
                code: githubCode,
            });

            const { token, user } = response.data;

            localStorage.setItem("@dowhile:token", token);

            api.defaults.headers.common.authorization = `Bearer ${token}`;

            setUser(user);
        } catch (err) { console.log(err); }
        finally {
            setIsSigninIn(false);
        }
    }

    async function signOut() {
        setUser(null);
        localStorage.removeItem("@dowhile:token");
    }

    useEffect(() => {
        const token = localStorage.getItem("@dowhile:token");

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<User>('profile').then(response => {
                setUser(response.data);
            }).catch(() => { signOut(); });
        }
    }, [])

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode);

            signIn(githubCode);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ signInUrl, isSigningIn, user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context;
}