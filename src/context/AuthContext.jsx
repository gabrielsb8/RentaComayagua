import { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase/config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Fetch user data from firestore to get role
                const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUser({ ...firebaseUser, ...userData });
                    setRole(userData.role);
                } else {
                    setUser(firebaseUser);
                    setRole("tenant"); // default fallback
                }
            } else {
                setUser(null);
                setRole(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const register = async (email, password, name, phone, selectedRole) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;

        // Create user document in Firestore
        await setDoc(doc(db, "users", newUser.uid), {
            uid: newUser.uid,
            name,
            email,
            role: selectedRole || "tenant", // "tenant" or "owner"
            phone: phone || "",
            fechaRegistro: serverTimestamp()
        });

        return newUser;
    };

    const logout = () => {
        return signOut(auth);
    };

    const loginWithGoogle = async (selectedRole) => {
        const userCredential = await signInWithPopup(auth, googleProvider);
        const user = userCredential.user;

        // Create user document in Firestore if it doesn't exist
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (!userDoc.exists()) {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName || user.email.split('@')[0],
                email: user.email,
                role: selectedRole || "tenant",
                phone: user.phoneNumber || "",
                fechaRegistro: serverTimestamp()
            });
        }
        return user;
    };

    const value = {
        user,
        role,
        login,
        loginWithGoogle,
        register,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
