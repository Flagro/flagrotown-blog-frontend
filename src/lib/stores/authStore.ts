import { writable } from 'svelte/store';
import { authService } from '$lib/services/authService';

interface AuthState {
	isLoggedIn: boolean;
	userData: string | null;
}

const initialState: AuthState = {
	isLoggedIn: false,
	userData: null
};

const authStore = writable(initialState);

// Function to update store based on login
async function login(credentials: { username: string; password: string }) {
	try {
		const userData = await authService.login(credentials);
		authStore.set({ isLoggedIn: true, userData });
	} catch (error) {
		console.error('Store login error:', error);
		// Handle error, e.g., set an error state in the store
	}
}

export default authStore;
export { login };
