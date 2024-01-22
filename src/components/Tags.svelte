<script lang="ts">
	import { selectedTags } from '$lib/stores/tagsStore';
	import { getTags} from '$lib/services/postsService';
	import { onMount } from 'svelte';

	let tags: string[] = [];

	async function loadTags() {
		tags = await getTags();
		// Apply tag filtering if needed
	}

	onMount(loadTags);

	function toggleTag(tag: string) {
		$selectedTags.includes(tag)
			? ($selectedTags = $selectedTags.filter((t) => t !== tag))
			: ($selectedTags = [...$selectedTags, tag]);
		// Trigger filtering logic based on selected tags
	}
</script>

<div>
	{#each tags as tag}
		<button on:click={() => toggleTag(tag)}>{tag}</button>
	{/each}
</div>
