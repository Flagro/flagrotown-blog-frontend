<script lang="ts">
	import { searchPosts } from '$lib/services/postsService';
	let query = '';

	async function handleSearch() {
		const results = await searchPosts(query);
		// Update the UI with the search results
	}
</script>

<div class="sticky top-0 z-10 flex items-center bg-blue-500/50 backdrop-blur-md rounded-xl border w-full">
	<input class="flex-1 rounded-l-xl bg-transparent px-4 py-2 placeholder-gray-400 text-gray-300 focus:outline-none" 
		   bind:value={query} 
		   placeholder="Search blogs..." />
	<button class="bg-green-500 hover:bg-green-600 text-gray-300 rounded-r-xl px-4 py-2"
			on:click={handleSearch}>
		Go!
	</button>
</div>
