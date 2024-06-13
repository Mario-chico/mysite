<script>
  export let slug;
  const fetchImage = (async () => {
    const res = await fetch("/api/view?" + new URLSearchParams({ slug }));
    return await res.json();
  })();
</script>

{#await fetchImage then data}
  <span>{data.count}</span>
{:catch}
  <span>10</span>
{/await}