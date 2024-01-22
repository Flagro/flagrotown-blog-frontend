<script lang="ts">
	import { searchPosts } from '$lib/services/postsService';
	import { searchInput } from '$lib/stores/searchStore';
	import { onMount } from 'svelte';
	let query = '';

	async function handleSearch() {
		const results = await searchPosts(query);
		$searchInput = results;
		// Update the UI with the search results
	}

	onMount(handleSearch);
</script>

<div
	class="sticky top-0 z-10 flex items-center bg-white-500/50 backdrop-blur-md border w-full search-container"
>
	<input
		class="flex-1 bg-transparent border-0 px-4 py-2 placeholder-gray-400 text-gray-300 search-input"
		bind:value={query}
		placeholder="Search blogs..."
	/>
	<button
		class="bg-green-500 hover:bg-green-600 border-2 border-green-500 text-gray-100 px-4 py-2 search-button"
		on:click={handleSearch}
	>
		Go!
	</button>
</div>

<style>
	.search-container {
		border-radius: 0.75rem; /* Adjust the border-radius as needed */
	}

	.search-input {
		border-radius: 0.75rem 0 0 0.75rem; /* Rounded only on the top-left and bottom-left */
	}

	.search-button {
		border-radius: 0 0.75rem 0.75rem 0; /* Rounded only on the top-right and bottom-right */
	}
</style>
