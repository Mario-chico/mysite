<script>
  export let userInput = '';
  export let i18n;
  let message = '';
  let l1 = '';
  let l2 = '';

  $: handleInput(userInput);

  function handleInput(value) {
    const number = parseInt(value);
    
    if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
      message = '';
    } else if (number >= 1 && number <= 20) {
      message = i18n.TEST.RESULT.LEVEL1.MESSAGE;
      l1 = i18n.TEST.RESULT.LEVEL1.L1;
      l2 = i18n.TEST.RESULT.LEVEL1.L2;
    } else if (number >= 21 && number <= 45) {
      message = i18n.TEST.RESULT.LEVEL2.MESSAGE;
      l1 = i18n.TEST.RESULT.LEVEL2.L1;
      l2 = i18n.TEST.RESULT.LEVEL2.L2;
    } else {
      message = i18n.TEST.RESULT.LEVEL3.MESSAGE;
      l1 = i18n.TEST.RESULT.LEVEL3.L1;
      l2 = i18n.TEST.RESULT.LEVEL3.L2;
    }
  }
</script>

<article class="number-input">
  <h2>{i18n.TEST.RESULT.TOTAL_EXHALE}</h2>
  <input
    type="number"
    bind:value={userInput}
    min="1"
    step="1"
    placeholder="Tu número aparece aquí..."
  />
  <p>{message}</p>
  <ul>
    <li>{l1}</li>
    <li>{l2}</li>
  </ul>
</article>

<style>
  .number-input {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }
  input {
    width: 30%;
    padding: 10px;
    font-size: 1em;
    border: 2px solid #3498db;
    border-radius: 5px;
    background-color: var(--background-color);
    transition: all 0.3s ease;
    box-sizing: border-box;
    color: var(--tex-color);
  }

  input:focus {
    outline: none;
    border-color: #2980b9;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }

  input::placeholder {
    color: #bdc3c7;
  }
  p {
    font-weight: bold;
  }
</style>