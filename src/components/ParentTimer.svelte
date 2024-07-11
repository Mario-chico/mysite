<script>
  export let i18n;
  import Timer from './Timer.svelte';
  import NumberInput from './TestCarbon.svelte';

  let inputValue = '';

  function handleTimerStopped(event) {
    inputValue = event.detail.toString();
  }
</script>

<article class="parent">
  <Timer on:timerStopped={handleTimerStopped} i18n={i18n} />
  <NumberInput bind:userInput={inputValue} i18n={i18n} />
</article >

<style>
  .parent {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
</style>