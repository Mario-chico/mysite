<script>
  export let userInput = '';
  let message = '';

  $: handleInput(userInput);

  function handleInput(value) {
    const number = parseInt(value);
    
    if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
      message = 'Please enter a positive integer.';
    } else if (number >= 1 && number <= 20) {
      message = 'Gotta be more disciplined';
    } else if (number >= 21 && number <= 45) {
      message = 'Good but room to improve';
    } else {
      message = 'Elite one';
    }
  }
</script>

<article class="number-input">
  <h1>Number Input Component</h1>
  <input
    type="number"
    bind:value={userInput}
    min="1"
    step="1"
    placeholder="Enter a positive integer"
  />
  <p>{message}</p>
</article>

<style>
  .number-input {
    font-family: Arial, sans-serif;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
  }

  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
  }
</style>