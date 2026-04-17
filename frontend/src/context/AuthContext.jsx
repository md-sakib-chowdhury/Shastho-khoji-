import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem("shastho_user");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });
    const [loading] = useState(false);

    const login = (userData) => {
        localStorage.setItem("shastho_user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("shastho_user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}