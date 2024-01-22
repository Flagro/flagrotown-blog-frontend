<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { getPost } from '$lib/services/postsService';
	import { page } from '$app/stores';
	import type { PostText } from '$lib/types/Post';

	let post: PostText | null = null;
	let error: string | null = null;

	onMount(async () => {
		const postId = $page.params.id;
		try {
			post = await getPost(postId);
		} catch (e) {
			error = e instanceof Error ? e.message : 'An unknown error occurred';
		}
	});

	$: renderedText = post ? marked(post.text) : '';
</script>

{#if post}
	<h1>{post.name}</h1>
	<div>{@html renderedText}</div>
{:else if error}
	<p>{error}</p>
{:else}
	<p>Loading...</p>
{/if}
