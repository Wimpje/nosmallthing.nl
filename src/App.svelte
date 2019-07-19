<script>
	export let whatis;
	export let count = 0;
   function handleWhy() {
		whatis = "let me tell you a story"
	}
   function handleKnowItAll() {
		whatis = "great, that saves me a lot of explanation";
	}
   
</script>

<style>
	
</style>
<img src="logo.png" alt="Site logo"/>
<h1>{whatis}</h1>
<button on:click={handleWhy}>why not?</button>
<button on:click={handleKnowItAll}>i know</button>
