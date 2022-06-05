<script lang="ts">
  export let keys: string[];
</script>

<div class="flex justify-center">
  {#each keys as key, i}
    <kbd class="kbd kbd-xs">{key}</kbd>
    <span class="flex mx-1 justify-center items-center">
      {i < keys.length - 1 ? "+" : ""}
    </span>
  {/each}
</div>
