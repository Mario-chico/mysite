<script>
  import { onDestroy, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let i18n;
  export let seconds = 0;
  let timer;
  let isRunning = false;

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        seconds += 1;
      }, 1000);
    }
  }

  function stopTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timer);
      dispatch('timerStopped', seconds);
    }
  }

  function resetTimer() {
    stopTimer();
    seconds = 0;
  }

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<article class="timer">
  <h2>{i18n.TEST.TIMER.TITLE}</h2>
  <div class="time">{formatTime(seconds)}</div>
  <div class="controls">
    <button on:click={startTimer} disabled={isRunning}>{i18n.TEST.START}</button>
    <button on:click={stopTimer} disabled={!isRunning}>{i18n.TEST.STOP}</button>
    <button on:click={resetTimer}>{i18n.TEST.RESET}</button>
  </div>
</article>

<style>
  .timer {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }

  .time {
    font-size: 2em;
    margin: 20px 0;
  }

  .controls {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>