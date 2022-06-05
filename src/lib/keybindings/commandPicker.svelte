<script lang="ts">
  import { Command, commands } from "./commands";
  let selectedCommand: Command;
</script>

<div class="flex flex-col mt-4">
  <div class="flex justify-center">
    <select
      bind:value={selectedCommand}
      class="select select-bordered select-xs w-full max-w-xs"
    >
      <option disabled selected>--Select command type--</option>
      {#each commands as command}
        <option value={command}>{command.title}</option>
      {/each}
    </select>
  </div>
  {#if !!selectedCommand?.component}
    <div class="p-4">
      <svelte:component this={selectedCommand.component} />
    </div>
  {/if}
</div>
