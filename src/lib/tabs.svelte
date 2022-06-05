<script lang="ts">
  import { get } from "svelte/store";
  import { activeTab, Tab, tabs } from "./store";
</script>
<div class="tabs">
  {#each tabs as tab}
    <a
      on:click={() => {
        $activeTab = tab;
      }}
      class:tab-active={tab.id === $activeTab.id}
      class="tab tab-bordered ">{tab.text}</a
    >
  {/each}
</div>
