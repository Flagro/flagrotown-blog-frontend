<script lang="ts">
	import { currentPage, postsPerPage } from '$lib/stores/paginationStore';
	import { totalPosts } from '$lib/stores/postsStore';

	let totalPages: number = 0;

	$: totalPages = Math.ceil($totalPosts / $postsPerPage);

	function goToNextPage() {
		if ($currentPage < totalPages) {
			$currentPage++;
		}
	}

	function goToPreviousPage() {
		if ($currentPage > 1) {
			$currentPage--;
		}
	}
</script>

<div class="flex justify-center items-center mt-6">
	<button
		class="pagination-arrow hover:text-gray-300"
		class:disabled={$currentPage <= 1}
		on:click={goToPreviousPage}>&lt;</button
	>
	<button class="text-lg mx-4 text-gray-300"> {$currentPage} / {totalPages}</button>
	<button
		class="pagination-arrow hover:text-gray-300"
		class:disabled={$currentPage >= totalPages}
		on:click={goToNextPage}>&gt;</button
	>
</div>

<style>
	.pagination-arrow {
		@apply text-blue-500;
	}
	.disabled {
		@apply text-gray-300 cursor-not-allowed;
	}
</style>
