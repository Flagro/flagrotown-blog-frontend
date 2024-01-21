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

<header class="p-4 flex justify-between items-center">
	<div class="text-lg font-bold">
		<a href="/" class="logo"> > open FG_BLOG</a>
	</div>
	<button
		class="text-sm px-4 py-2 rounded"
		on:click={handleAuthAction}
	>
		{#if isLoggedIn}
			Settings
		{:else}
			Sign In
		{/if}
	</button>
</header>
