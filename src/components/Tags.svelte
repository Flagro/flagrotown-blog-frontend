<script lang="ts">
	import { selectedTags } from '$lib/stores/tagsStore';

	let tags = ['tag1', 'tag2', 'tag3']; // Replace with your tags

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
