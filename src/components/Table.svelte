<script>
  export let exercises = [];
  import Modal from "./Modal.svelte";

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

<style>
  .responsive-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    color: #ffffff; /* White text for readability */
    font-size: 0.9rem;
  }

  .responsive-table thead {
    background-color: #ff0000; /* Bright red for header */
    color: #ffffff;
  }

  .responsive-table th,
  .responsive-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #ffffff; /* White borders */
  }
  .exercise-button {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 0.9rem;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Geologica Variable';
  }
/* Responsive design for mobile */
@media (max-width: 768px) {
  .responsive-table thead {
    display: none; /* Hide table headers */
  }

  .responsive-table tr {
    display: block;
    margin-bottom: 1rem;
    background-color: #1a1a4d; /* Slightly lighter purple for contrast */
    border-radius: 8px;
    overflow: hidden;
  }

  .responsive-table td {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border: none; /* Remove borders on mobile */
    border-bottom: 1px solid #444; /* Divider for rows */
    text-align: end;
  }

  .responsive-table td:last-child {
    border-bottom: none; /* No border for the last row */
  }

  .responsive-table td::before {
    content: attr(data-label); /* Use the data-label attribute */
    font-weight: bold;
    text-transform: uppercase;
    color: #ff0000; /* Highlighted red labels */
    margin-right: 0.5rem;
  }
}
</style>
