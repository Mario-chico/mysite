<script>
  export let userInput = '';
  let message = '';

  $: handleInput(userInput);

  function handleInput(value) {
    const number = parseInt(value);
    
    if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
      message = 'Please enter a positive integer.';
    } else if (number >= 1 && number <= 20) {
      message = 'Indica un estado muy reactivo y potenciales problemas como ansiedad o sobreentrenamiento. Es posible que emocionalmente no seas reactiva, sin embargo tu sistema lo es.';
    } else if (number >= 21 && number <= 45) {
      message = 'Sugiere un nivel medio de tolerancia al CO^2^, mejoras en como respondes al estrés vienen con entrenamiento para controlar la respiración ';
    } else {
      message = 'Indica un buen control del diafragma y una gestión eficaz del CO2, lo que refleja una mejor tolerancia al estrés y una mayor eficiencia aeróbica.';
    }
  }
</script>

<article class="number-input">
  <h2>Tiempo exhalando</h2>
  <input
    type="number"
    bind:value={userInput}
    min="1"
    step="1"
    placeholder="Tu número aparece aquí..."
  />
  <p>{message}</p>
</article>

<style>
  .number-input {
    font-family: Arial, sans-serif;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
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