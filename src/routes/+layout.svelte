<script>
	import '../app.css';
	import GeoPattern from 'geopattern';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	// You can use a hard-coded string, or base it on some other property such as user input.
	const pattern = GeoPattern.generate('fg it blog').toDataUrl();

	// Define the background styles
	const mainBodyBgStyle = `background-image: ${pattern};`;
</script>

<div class="header-bg">
	<Header />
</div>

<div class="main-body-bg" style={mainBodyBgStyle}>
	<slot />
</div>

<div class="footer-bg">
	<Footer />
</div>
