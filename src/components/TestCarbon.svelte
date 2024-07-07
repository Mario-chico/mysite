<script>
  export let userInput = '';
  let message = '';
  let l1 = '';
  let l2 = '';

  $: handleInput(userInput);

  function handleInput(value) {
    const number = parseInt(value);
    
    if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
      message = '';
    } else if (number >= 1 && number <= 20) {
      message = `Usa 2-3 segundos en cada lado del cuadrado, por un mínimo de 3 minutos.`;
      l1 = 'Este resultado indica un estado muy reactivo y potenciales problemas como ansiedad o sobreentrenamiento.';
      l2 = 'Es posible que emocionalmente no sientas la reacción, sin embargo tu sistema lo es.';
    } else if (number >= 21 && number <= 45) {
      message = 'Usa de 3-6 segundos en cada lado del cuadrado, por un mínimo de 3 minutos. ';
      l1 = 'Sugiere un nivel medio de tolerancia al CO^2^';
      l2 = 'mejoras en como respondes al estrés vienen con entrenamiento para controlar la respiración.';
    } else {
      message = 'Usa de 7-12 segundos en cada lado del cuadrado, por un mínimo de 3 minutos.';
      l1 = 'Indica un buen control del diafragma y una gestión eficaz del CO2';
      l2 = 'refleja una mejor tolerancia al estrés y una mayor eficiencia aeróbica.';
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
    max-width: 30%;
    padding: 5px;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
  }
</style>