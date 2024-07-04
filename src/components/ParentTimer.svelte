<script>
  import Timer from './Timer.svelte';
  import NumberInput from './TestCarbon.svelte';

  let inputValue = '';

  function handleTimerStopped(event) {
    inputValue = event.detail.toString();
  }
</script>

<article class="parent">
  <Timer on:timerStopped={handleTimerStopped} />
  <NumberInput bind:userInput={inputValue} />
</article >

<style>
  .parent {
    font-family: Arial, sans-serif;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
  }
</style>