<script>
	import '../app.css';
	import 'css-doodle';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
    <div class="bg-red-700 dark:bg-red-800">
        <Header />
    </div>

    <div class="flex-grow relative overflow-hidden">
        <css-doodle class="absolute top-0 left-0 w-full h-full z-[-1] bg-slate-800">
			{`
				@grid: 20 / 100vmax / #0a0c27;
				@content: @unicode.r(0x2500, 0x257f);
				color: hsla(@r360, 70%, 70%, @r.9);
				font-size: 8vmin;
				font-family: sans-serif;
			`}
        </css-doodle>
        <div class="relative z-10 main-body-bg p-6 lg:px-64">
            <slot />
        </div>
    </div>

    <div class="bg-slate-800">
        <Footer />
    </div>
</div>