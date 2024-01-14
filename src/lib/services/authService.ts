async function login(credentials: { username: string; password: string }) {
	try {
		const response = await fetch('/api/login', {
			// TODO: Change to login API
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(credentials)
		});
		if (!response.ok) {
			throw new Error('Login failed');
		}
		const userData = await response.json();
		return userData;
	} catch (error) {
		console.error('Login error:', error);
		throw error;
	}
}

export const authService = {
	login
};
