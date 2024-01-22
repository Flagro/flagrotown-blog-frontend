<script lang="ts">
    import { selectedTags } from '$lib/stores/tagsStore';
    import { getTags } from '$lib/services/postsService';
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';

    let tags: string[] = [];

    async function loadTags() {
        tags = await getTags();
        $selectedTags = tags; // Initialize with all tags selected
    }

    onMount(loadTags);

    function toggleTag(selectedTag: string) {
        if ($selectedTags.length === tags.length) {
            // If all tags are currently selected and one is clicked,
            // deselect all others except the clicked one
            $selectedTags = [selectedTag];
        } else if ($selectedTags.includes(selectedTag)) {
            // If the clicked tag is already selected, unselect it
            $selectedTags = $selectedTags.filter(tag => tag !== selectedTag);
            // If all tags are unselected after this, reset to having all tags highlighted
            if ($selectedTags.length === 0) {
                $selectedTags = tags;
            }
        } else {
            // Add the clicked tag to the selection
            $selectedTags = [...$selectedTags, selectedTag];
        }
    }
</script>

<style>
    .tag-button {
        transition: background-color 0.3s, border-color 0.3s;
    }
</style>

<div class="flex flex-wrap gap-2 py-3">
    {#each tags as tag}
        <button class="rounded-full px-3 py-0 border tag-button
                       {($selectedTags.includes(tag) ? 'border-gray-100 bg-green-500 hover:bg-green-600' : 'border-gray-300 bg-gray-500')} 
                       text-white"
                on:click={() => toggleTag(tag)}
                in:fade={{ delay: 0, duration: 300 }}>
            {tag}
        </button>
    {/each}
</div>
