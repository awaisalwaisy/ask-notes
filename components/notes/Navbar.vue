<script setup lang="ts">
import { Plus } from "lucide-vue-next";
import { UserButton } from "vue-clerk";
import { fnNoteDialog } from "./fn-note";
const { toggle } = fnNoteDialog();

// computed
const userAvatarStyle = computed(() => {
  return {
    elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
  };
});
</script>
<template>
  <div class="p-4 shadow">
    <div
      class="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3"
    >
      <NuxtLink to="/notes" class="flex items-center gap-1">
        <NuxtImg src="/logo.svg" alt="FlowBrain logo" width="40" height="40" />
        <span class="font-bold">AskNotes</span>
      </NuxtLink>

      <div class="flex items-center gap-3">
        <UserButton afterSignOutUrl="/" :appearance="userAvatarStyle" />
        <!-- <ThemeToggleButton /> -->
        <Button @click="toggle">
          <Plus :size="20" class="mr-2" />
          Add Note
        </Button>

        <AskChatBtn />
      </div>
    </div>
  </div>
</template>
