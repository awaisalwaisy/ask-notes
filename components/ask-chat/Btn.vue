<script setup lang="ts">
import { Bot } from "lucide-vue-next";

// state - data
const isChatBox = ref(false);

// methods
function toggle() {
  isChatBox.value = !isChatBox.value;
}
</script>

<template>
  <Button @click="toggle">
    <Bot :size="20" class="mr-2" />
    AI Chat
  </Button>
  <AskChatBox :open="isChatBox" @close="toggle" />
</template>

<style scoped></style>
