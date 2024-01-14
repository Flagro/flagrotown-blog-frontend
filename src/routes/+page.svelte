<script>
	import { onMount } from 'svelte';

	let randomEmoji = '';

	const getRandomEmoji = () => {
		const emojis = ['🔥', '💡', '🚀', '🎉', '🔨'];
		const randomIndex = Math.floor(Math.random() * emojis.length);
		randomEmoji = emojis[randomIndex];
	};

	onMount(() => {
		getRandomEmoji();
	});
</script>

<div class="flex flex-col items-center justify-center h-screen bg-black">
	<div class="text-white text-4xl font-bold bg-black bg-opacity-50 p-5">
		{randomEmoji} BLOG IN PROGRESS {randomEmoji}
	</div>
</div>
