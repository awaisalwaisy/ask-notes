<script setup lang="ts">
definePageMeta({
  layout: "notes",
  middleware: ["auth"],
});
</script>
<template>
  <NotesNavbar />
  <main>
    Notes work
    <LoadingButton loading> Loading </LoadingButton>
  </main>
</template>
