<script lang="ts">
	// Import statements if needed
	let isLoggedIn = false; // Replace with actual authentication logic

	// Function to handle Sign In/Settings button
	function handleAuthAction() {
		if (isLoggedIn) {
			// Logic for opening settings
		} else {
			// Logic for signing in
		}
	}
</script>

<header class="bg-blue-500 text-white p-4 flex justify-between items-center">
	<div class="text-lg font-bold">
		<a href="/" class="hover:text-gray-200">FLAGROTOWN BLOG</a>
	</div>
	<button
		class="bg-blue-700 hover:bg-blue-600 text-sm px-4 py-2 rounded"
		on:click={handleAuthAction}
	>
		{#if isLoggedIn}
			Settings
		{:else}
			Sign In
		{/if}
	</button>
</header>
