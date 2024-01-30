<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-vue-next";
import { type PrimitiveProps } from "radix-vue";
import type { buttonVariants } from "../button";

interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {}

interface ButtonProps /* @vue-ignore */ extends PrimitiveProps {
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
  as?: string;
}

type Props = {
  loading: boolean;
} & ButtonProps;

defineProps<Props>();
</script>

<template>
  <Button :disabled="loading || $attrs.disabled" v-bind="$attrs">
    <Loader2 class="mr-2 h-4 w-4 animate-spin" v-if="loading" />
    <slot />
  </Button>
</template>
