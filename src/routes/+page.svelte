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

<div class="container">
	<div class="sign">{randomEmoji} BLOG IN PROGRESS {randomEmoji}</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: black;
	}

	.sign {
		font-size: 48px;
		font-weight: bold;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 20px;
	}
</style>
