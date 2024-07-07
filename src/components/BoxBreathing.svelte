<script>
  let stepDuration = 4; // Default duration for each step (in seconds)
  let totalDuration = 3; // Default total duration (in minutes)
  let currentStep = 'Inhale';
  let count = stepDuration;
  let interval;
  let isRunning = false;

  const steps = [
    { name: 'Inhale', duration: stepDuration },
    { name: 'Hold', duration: stepDuration },
    { name: 'Exhale', duration: stepDuration },
    { name: 'Hold', duration: stepDuration }
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
        currentStep = 'Finished';
      }
    }, 1000);
  }

  function reset() {
    if (interval) {
      clearInterval(interval);
    }
    isRunning = false;
    currentStep = 'Inhale';
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
    height: 100vh;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #4CAF50;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
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
  }
</style>

<div class="container">
  <div class="circle">
    {currentStep} {isRunning ? `for ${count} seconds` : ''}
  </div>
  <div class="controls">
    <div>
      <label for="stepDuration">Step Duration (seconds): </label>
      <input id="stepDuration" type="number" bind:value={stepDuration} min="2" />
    </div>
    <div>
      <label for="totalDuration">Total Duration (minutes): </label>
      <input id="totalDuration" type="number" bind:value={totalDuration} min="3" />
    </div>
    <button on:click={startBoxBreathing} disabled={isRunning}>Start</button>
    <button on:click={reset} disabled={!isRunning}>Reset</button>
  </div>
</div>
