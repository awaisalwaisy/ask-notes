<script setup lang="ts">
import { Bot } from "lucide-vue-next";
import { useUser } from "vue-clerk";
import { cn } from "~/lib/utils";

// props
const props = defineProps<{
  message: /* Pick<Message, "role" | "content"> */ any;
}>();

// state - data
const { user } = useUser();
const isAiMessage = props.message.role === "assistant";

// const isAiMessage = ref(false);

// computed
const classes = computed(() => {
  return {
    wrapper: cn(
      "mb-3 flex items-center",
      isAiMessage ? "me-5 justify-start" : "ms-5 justify-end"
    ),
    content: cn(
      "whitespace-pre-line rounded-md border px-3 py-2",
      isAiMessage ? "bg-background" : "bg-primary text-primary-foreground"
    ),
  };
});
</script>

<template>
  <div :class="classes.wrapper">
    <Bot v-if="isAiMessage" class="mr-2 shrink-0" />
    <p :class="classes.content">
      {{ message.content }}
    </p>
    <!-- {!isAiMessage && user?.imageUrl && ( -->
    <NuxtImg
      v-if="!isAiMessage && user?.imageUrl"
      :src="user?.imageUrl"
      alt="User image"
      :width="100"
      :height="100"
      class="ml-2 h-10 w-10 rounded-full object-cover"
    />
    <!-- )} -->
  </div>
</template>

<style scoped></style>
