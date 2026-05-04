import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch(`${API_URL}/api/auth/profile`, {
                    method: "GET",
                    credentials: "include" 
                });

                if (res.ok) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
            } catch (err) {
                setIsAuth(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <div className="text-white flex justify-center items-center min-h-screen">
                Loading...
            </div>
        );
    }

    if (!isAuth) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}