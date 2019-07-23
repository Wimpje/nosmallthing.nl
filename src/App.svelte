<script>
  import { fade } from "svelte/transition";

  export let whatis;
  export let showButtons = true;
  function handleWhy() {
    whatis = "come back in a month, then I'll tell you a story";
    showButtons = false;
  }
  function handleKnowItAll() {
    whatis = "great, that saves me a lot of explanation";
    showButtons = false;
  }
</script>

<style>
.center {
   display:flex;
   justify-content:center;
   align-items:center;
}
</style>
<div class="center">
   <img src="logo.png" alt="Site logo" />
</div>
<h1 class="center">{whatis}</h1>
{#if showButtons}
  <div class="center choose-wisely" transition:fade={{ delay: 0, duration: 300 }}>
    <button on:click={handleWhy}>why not?</button>
    <button on:click={handleKnowItAll}>i know</button>
  </div>
{:else}
  <div class="center" transition:fade={{ delay: 300, duration: 300 }}>
     this page is not ready yet. but it's already dynamic, look at this awesome fade transition!
  </div>
{/if}
