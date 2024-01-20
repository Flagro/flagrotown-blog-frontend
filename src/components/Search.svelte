<script lang="ts">
	import { searchPosts } from '$lib/services/postsService';
	let query = '';

	async function handleSearch() {
		const results = await searchPosts(query);
		// Update the UI with the search results
	}
</script>

<input bind:value={query} />
<button on:click={handleSearch}>Search</button>
