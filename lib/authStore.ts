import { create } from "zustand";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

type AuthState = {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
}));

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user);
});
