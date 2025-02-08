<script>
  export let exercises = [];
  import Modal from "./Modal.svelte";
  import '../tables.css';

  let selectedExercise = null; // Estado para el ejercicio seleccionado
  let showModal = false; // Estado para controlar si el modal está abierto

  function openModal(exercise) {
    selectedExercise = exercise;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedExercise = null;
  }
</script>

<table class="responsive-table">
  <thead>
    <tr>
      <th>Orden</th>
      <th>Ejercicio</th>
      <th>Sets</th>
      <th>Reps</th>
      <th>Tempo</th>
      <th>Descanso</th>
    </tr>
  </thead>
  <tbody>
    {#each exercises as exercise}
      <tr>
        <td data-label="Sets">{exercise.sets}</td>
        <td data-label="Reps">{exercise.reps}</td>
        <td data-label="Tempo">{exercise.tempo}</td>
        <td data-label="Descanso">{exercise.rest}</td>
        {#if exercise.note}
          <td data-label="Notas">{exercise.note}</td>
        {/if}
        {#if Array.isArray(exercise.exercise)}
          {#each exercise.exercise as ex}
            <td data-label={Object.keys(ex)[0]}>
              <button 
                class="exercise-button" 
                on:click={() => openModal(ex)}
                on:keydown={(e) => e.key === 'Enter' && openModal(ex)}
                tabindex="0"
              >
                {Object.values(ex)[0]}
              </button>
            </td>
          {/each}
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

{#if showModal}
  <Modal selectedExercise={selectedExercise} on:close={closeModal} />
{/if}