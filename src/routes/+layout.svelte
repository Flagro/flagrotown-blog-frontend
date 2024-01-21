<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="header-bg">
	<Header />
</div>

<div class="main-body-bg">
	<slot />
</div>

<div class="footer-bg">
	<Footer />
</div>
