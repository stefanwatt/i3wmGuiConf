<script lang="ts">
  import { Command, open } from "@tauri-apps/api/shell";
  import { onMount } from "svelte";
  import parseLsdesktopfOutput from "./parseLsdesktopfOutput";
  const lsdesktopfOutputLines = [];
  let selectedApp;
  let desktopEntries = [];
  let loading = false;

  onMount(async () => {
    const getDesktopEntriesCmd = new Command("lsdesktopf", ["--list"]);
    getDesktopEntriesCmd.stdout.on("data", (line) => {
      lsdesktopfOutputLines.push(line);
    });
    loading = true;
    await getDesktopEntriesCmd.spawn();
    setTimeout(() => {
      desktopEntries = parseLsdesktopfOutput(lsdesktopfOutputLines);
      loading = false;
    }, 1000);
  });
</script>

<div class="flex justify-center">
  <div>
    <select
      disabled={loading}
      bind:value={selectedApp}
      class="select select-bordered select-xs w-full max-w-xs"
    >
      <option disabled selected>--Select App to launch--</option>
      {#each desktopEntries as entry}
        <option value={entry}>{entry.title}</option>
      {/each}
    </select>
    {#if selectedApp?.cmd}
      <div class="mt-4 flex items-center">
        <label for="cmd" class="label text-xs flex items-center">run command:</label>
        <span
          id="cmd"
        >{selectedApp.cmd}</span>
      </div>
    {/if}
  </div>
</div>
