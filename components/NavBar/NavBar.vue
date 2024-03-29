<template>
  <nav>
    <img
      class="logo"
      src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
    />
  </nav>
</template>

<!-- Try to remove lang='ts', and the issue will be solved -->
<script setup lang="ts">
onMounted(() => {
  console.log("mounted");
});
</script>

<style>
.logo {
  max-width: 100px;
}
</style>
