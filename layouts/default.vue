<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/NavBar/NavBar.vue";
</script>

<!-- When you comment out the style tag, the issue disappears. -->
<style>
html,
body {
  min-height: 100%;
}
</style>
