<script>
  export let selectedExercise;
  import { createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();
  
  function closeModal() {
    dispatch("close");
  }
</script>
<div class="modal-overlay" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <button class="close-button" on:click={closeModal}>✖</button>
    {#if selectedExercise}
      <h2>{selectedExercise.exercise}</h2>
      <!-- <video controls>
        <source src={selectedExercise.link} type="video/mp4" />
        Tu navegador no soporta videos.
      </video> -->
      <iframe width="450" height="253" src="https://www.youtube.com/embed/{selectedExercise.yt}" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    {/if}
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding-block: 20px;
    border-radius: 8px;
    text-align: center;
    position: relative;
    width: 95%;
    max-width: 500px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  }

  /* video {
    max-width: 100%;
    border-radius: 8px;
  } */
</style>
