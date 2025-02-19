"use client";
import { signInWithGoogle, logout } from "@/lib/authFunctions";
import { useAuthStore } from "@/lib/authStore";

export default function LoginPage() {
    const { user, loading } = useAuthStore();

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {user ? (
                <div className="p-6 bg-white shadow-md rounded-lg text-center">
                    <p className="mb-4 text-lg font-semibold">Welcome, {user.displayName}!</p>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <button
                    onClick={signInWithGoogle}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                >
                    Sign In with Google
                </button>
            )}
        </div>
    );
}
