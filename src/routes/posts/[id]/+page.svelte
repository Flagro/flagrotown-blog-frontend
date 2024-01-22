<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import { getPost } from '$lib/services/postsService';
	import { page } from '$app/stores';
	import type { PostText } from '$lib/types/Post';

	let post: PostText | null = null;
	let error: string | null = null;
	let sanitizedHTML: string = '';

	onMount(async () => {
		const postId = $page.params.id;
		try {
			post = await getPost(postId);
			if (post) {
				const rawMarkdown = marked(post.text);
				sanitizedHTML = DOMPurify.sanitize(await rawMarkdown);
			}
		} catch (e) {
			error = e instanceof Error ? e.message : 'An unknown error occurred';
		}
	});
</script>

<div class="page-body">
	<div class="w-3/4">
		{#if post}
			<h1>{post.name}</h1>
			<!-- eslint-disable -->
			<div>{@html sanitizedHTML}</div>
			<!-- eslint-enable -->
		{:else if error}
			<p>{error}</p>
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>
