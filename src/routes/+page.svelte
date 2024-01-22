<script>
	import Search from '../components/Search.svelte';
	import Tags from '../components/Tags.svelte';
	import PostsList from '../components/PostsList.svelte';
</script>


<div class="page-body">
	<div class="w-3/4">
		<Search />
	</div>
	<div class="w-3/4">
        <Tags />
        <PostsList />
    </div>
</div>
