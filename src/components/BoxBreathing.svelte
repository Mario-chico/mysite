<script>
  export let i18n;
  let stepDuration = 4; // Default duration for each step (in seconds)
  let totalDuration = 3; // Default total duration (in minutes)
  let currentStep = i18n.TEST.STEPS.INHALE;
  let count = stepDuration;
  let interval;
  let isRunning = false;

  const steps = [
    { name: i18n.TEST.STEPS.INHALE, duration: stepDuration },
    { name: i18n.TEST.STEPS.HOLD, duration: stepDuration },
    { name: i18n.TEST.STEPS.EXHALE, duration: stepDuration },
    { name: i18n.TEST.STEPS.HOLD, duration: stepDuration }
  ];

  let currentStepIndex = 0;
  let totalTimeElapsed = 0;

  function startBoxBreathing() {
    if (interval) {
      clearInterval(interval);
    }

    isRunning = true;
    totalTimeElapsed = 0;

    interval = setInterval(() => {
      count--;
      totalTimeElapsed++;

      if (count === 0) {
        currentStepIndex = (currentStepIndex + 1) % steps.length;
        currentStep = steps[currentStepIndex].name;
        count = stepDuration;
      }

      if (totalTimeElapsed >= totalDuration * 60) {
        clearInterval(interval);
        isRunning = false;
        currentStep = i18n.TEST.FINISH;
      }
    }, 1000);
  }

  function reset() {
    if (interval) {
      clearInterval(interval);
    }
    isRunning = false;
    currentStep = i18n.TEST.STEPS.INHALE;
    count = stepDuration;
    currentStepIndex = 0;
    totalTimeElapsed = 0;
  }

  $: steps.forEach(step => step.duration = stepDuration);
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .square {
    width: 150px;
    height: 150px;
    background-color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .controls input {
    width: 60px;
    text-align: center;
    padding: 5px;
    font-size: .6em;
    border: 2px solid #3498db;
    border-radius: 5px;
    background-color: var(--background-color);
    transition: all 0.3s ease;
    color: var(--tex-color);
  }
  button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }
</style>

<div class="container">
  <h2>{i18n.TEST.TITLE}</h2>
  <div class="square">
    {currentStep} {isRunning ? `por ${count} segundos` : ''}
  </div>
  <div class="controls">
    <div>
      <label for="stepDuration">{i18n.TEST.SET.SQUARE_TIME}</label>
      <input id="stepDuration" type="number" class="test" bind:value={stepDuration} min="2" />
    </div>
    <div>
      <label for="totalDuration">{i18n.TEST.SET.TOTAL_TIME} </label>
      <input id="totalDuration" type="number" class="test" bind:value={totalDuration} min="3" />
    </div>
    <button on:click={startBoxBreathing} disabled={isRunning}>{i18n.TEST.START}</button>
    <button on:click={reset} disabled={!isRunning}>{i18n.TEST.RESET}</button>
  </div>
</div>
