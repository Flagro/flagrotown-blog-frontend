<script>
	import Search from '../components/Search.svelte';
	import Tags from '../components/Tags.svelte';
	import PostsList from '../components/PostsList.svelte';
	import Pagination from '../components/Pagination.svelte';
</script>


<div class="page-body">
	<div class="w-3/4">
		<Search />
	</div>
	<div class="w-3/4 flex-grow">
        <Tags />
        <PostsList />
    </div>
	<div class="w-3/4">
		<Pagination />
	</div>
</div>
