<script setup lang="ts">
import { XCircle } from "lucide-vue-next";
import { cn } from "~/lib/utils";

// state - data
const scrollRef = ref<HTMLDivElement | null>(null);

// props
const props = defineProps<{ open: boolean }>();

// emits
const emits = defineEmits<{
  (e: "close"): void;
}>();

// methods
function onClose() {
  emits("close");
}

// computed
const classes = computed(() => {
  return {
    wrapper: cn(
      "fixed bottom-0 right-0 z-20 p-1 xl:right-36 max-w-[500px] w-full",
      props.open ? "block" : "hidden"
    ),
  };
});
</script>

<template>
  <div :class="classes.wrapper">
    <button class="mb-1 ms-auto block" @click="onClose">
      <XCircle :size="30" />
    </button>
    <div class="flex h-[600px] flex-col rounded border bg-background shadow-xl">
      <div className="mt-3 h-full overflow-y-auto px-3" ref="scrollRef">
        <AskChatMessage :message="{ role: 'assistant', content: 'Hello!' }" />
        <AskChatMessage :message="{ role: 'user', content: 'Hi!' }" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
