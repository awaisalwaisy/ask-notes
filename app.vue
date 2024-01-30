<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <!-- <ProModel /> -->
    <NuxtPage />
    <!-- <Toaster /> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Ask Notes | Talk to your notes",
  meta: [{ name: "description", content: "Talk to your notes with ease" }],
});
</script>
