<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import { getPosts } from '$lib/services/postsService';
	import { selectedTags } from '$lib/stores/tagsStore';
	import { onMount } from 'svelte';

	let posts: Post[] = [];

	async function loadPosts() {
		posts = await getPosts();
		// Apply tag filtering if needed
	}

	onMount(loadPosts);
	$: $selectedTags, loadPosts(); // Re-load posts when selected tags change
</script>

<div>
	{#each posts as post}
		<div>
			<h3>{post.id}: {post.name}</h3>
			<p>Tags: {post.tags.join(', ')}</p>
		</div>
	{/each}
</div>
