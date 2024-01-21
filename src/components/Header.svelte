<script>
    // Import statements (if any) and your script logic here
    let isLoggedIn = false;
    // Your script logic, including how `isLoggedIn` gets its value
</script>

<header class="p-4 flex justify-between items-center">
    <div class="text-lg font-bold">
        <a href="/" class="logo"> > open FG_BLOG</a>
    </div>

	<nav>
		<a href="https://flagrotown.com" class="text-lg px-4 py-2 font-bold"> ABOUT </a>
		{#if isLoggedIn}
			<a href="/logout" class="text-lg px-4 py-2 font-bold"> LOG OUT </a>
		{:else}
			<a href="/login" class="text-lg px-4 py-2 font-bold"> LOG IN </a>
		{/if}
	</nav>
</header>
