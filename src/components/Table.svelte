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
        <td data-label="Orden">{exercise.order}</td>
        <td data-label="Ejercicio">
          {#if exercise.yt}
            <button 
              class="exercise-button" 
              on:click={() => openModal(exercise)}
              on:keydown={(e) => e.key === 'Enter' && openModal(exercise)}
              tabindex="0"
            >
              {exercise.exercise}
            </button>
          {:else}
            {exercise.exercise}
          {/if}
        </td>
        <td data-label="Sets">{exercise.sets}</td>
        <td data-label="Reps">{exercise.reps}</td>
        <td data-label="Tempo">{exercise.tempo}</td>
        <td data-label="Descanso">{exercise.rest}</td>
        {#if exercise.note}
          <td data-label="Notas">{exercise.note}</td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

{#if showModal}
  <Modal selectedExercise={selectedExercise} on:close={closeModal} />
{/if}