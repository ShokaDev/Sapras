import { auth } from './firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Register a new user
export async function registerUser(email, password, fullName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update user profile with full name
        await updateProfile(user, {
            displayName: fullName
        });

        return { success: true, user: user };
    } catch (error) {
        return { success: false, error: error.message, code: error.code };
    }
}

// Login user
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message, code: error.code };
    }
}

// Logout user
export async function logoutUser() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Check authentication state
export function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            callback(user);
        } else {
            callback(null);
        }
    });
}

// Helper to handle error messages
export function getFriendlyErrorMessage(errorCode) {
    switch (errorCode) {
        case 'auth/email-already-in-use':
            return 'Email address is already registered.';
        case 'auth/invalid-email':
            return 'Invalid email address format.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            return 'Invalid email or password.';
        default:
            return 'An error occurred. Please try again.';
    }
}