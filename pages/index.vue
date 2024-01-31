<template>
  <main class="flex h-screen flex-col items-center justify-center gap-5">
    <div class="flex items-center gap-4">
      <!-- <Image src={logo} alt="FlowBrain logo" width={100} height={100} /> -->
      <NuxtImg src="/logo.svg" width="100" height="100" />

      <span class="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Ask Notes
      </span>
    </div>
    <p class="max-w-prose text-center">
      An intelligent note-taking app with AI integration, built with OpenAI,
      Pinecone, Nuxt 3, Shadcn UI, VueClerk, and more.
    </p>
    <Button size="lg" asChild>
      <NuxtLink to="/notes">Open</NuxtLink>
    </Button>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
