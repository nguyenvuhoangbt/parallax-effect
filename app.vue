<script setup>
useHead({
  titleTemplate: "Travelo",
});
</script>

<template>
  <div class="bg-white overflow-x-hidden">
    <div class="max-w-[2140px] relative mx-auto">
      <Header />
      <main class="h-screen">
        <Layers />

        <div class="h-screen bg-slate-400 relative z-10">
          <h1 class="text-center text-7xl p-4">Content here</h1>
        </div>
      </main>
    </div>
  </div>
</template>
