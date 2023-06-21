import { createContext, useState, Dispatch, SetStateAction } from "react";

interface ContextProps {
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    token: string | null
}

export const AuthContext = createContext({
    isLoading: false,
    setLoading: () => {},
    token: null
});

export const AuthProvider = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                setIsLoading,
                token,
                setToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

