<script setup lang="ts">
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import { type Note } from "@prisma/client";
import type { ADD_NOTE } from "~/constants/note.schema";
import { fnAddNote, fnNoteDialog } from "./fn-note";

const { state, toggle } = fnNoteDialog();
const { handleSubmit } = fnAddNote();
const isSubmitting = ref(false);

// delete note
const deleteInProgress = ref(false);
function onDelete() {
  deleteInProgress.value = true;
  alert("delete");
  deleteInProgress.value = false;
}

// props
interface Props {
  noteToEdit?: Note;
}
defineProps<Props>();

// submit a form
const onSubmit = handleSubmit((data: ADD_NOTE) => {
  isSubmitting.value = true;
  alert(JSON.stringify(data));
  isSubmitting.value = false;
});
</script>

<template>
  <button @click="toggle">toggle</button>
  <Dialog :open="state.open" @update:open="toggle">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ noteToEdit ? "Edit Note" : "Add Note" }}</DialogTitle>
      </DialogHeader>
      <form @submit="onSubmit" class="space-y-3">
        <FormField v-slot="{ componentField }" name="title">
          <FormItem v-auto-animate>
            <FormLabel>Note title</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Note title"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="content">
          <FormItem v-auto-animate>
            <FormLabel>Note content</FormLabel>
            <FormControl>
              <Textarea
                type="text"
                placeholder="Note content"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <DialogFooter class="gap-1 sm:gap-0">
          <LoadingButton
            v-if="noteToEdit"
            type="button"
            variant="destructive"
            :disabled="isSubmitting"
            :loading="deleteInProgress"
          >
            Delete note
          </LoadingButton>
          <LoadingButton
            v-else
            type="submit"
            :loading="isSubmitting"
            :disabled="deleteInProgress"
          >
            Submit
          </LoadingButton>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
