<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import { getPosts } from '$lib/services/postsService';
	import { selectedTags } from '$lib/stores/tagsStore';
	import { totalPosts } from '$lib/stores/postsStore';
	import { onMount } from 'svelte';

	let posts: Post[] = [];

	async function loadPosts() {
		posts = await getPosts();
		// Apply tag filtering if needed
	}

	onMount(loadPosts);
	$: $selectedTags, loadPosts(); // Re-load posts when selected tags change
</script>

<div class="space-y-5 mt-6">
	{#each posts as post}
		<a href={`/posts/${post.id}`} class="post-link">
			<div class="post-box p-6 pb-1 hover:bg-gray-800/30">
				<h3 class="text-3xl bp-2 mb-3 font-semibold">{post.name}</h3>
				<div class="flex flex-wrap gap-2">
					{#each post.tags as tag}
						<span
							class="tag rounded-full px-3 py-0 border
                                   {$selectedTags.includes(tag)
								? 'border-gray-100 bg-green-500'
								: 'border-gray-300 bg-gray-500'} 
                                   text-white"
						>
							{tag}
						</span>
					{/each}
				</div>
				<p class="text-gray-300 mt-5">{post.annotation}</p>
			</div>
		</a>
	{/each}
	{#if posts.length === 0}
		<p>Oopsie! No posts found :(</p>
	{/if}
</div>

<style>
	.post-box {
		border-top: 1px solid rgba(255, 255, 255, 0.6);
		border-bottom: 1px solid rgba(255, 255, 255, 0.6);
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.post-box:hover {
		transform: scale(1.05);
		box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.2);
	}

	.post-link {
		text-decoration: none; /* Removes underline from links */
		color: inherit; /* Inherits text color */
		display: block; /* Makes the link block level */
	}
</style>
