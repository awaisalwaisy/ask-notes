import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { ADD_NOTE_SCHEMA } from "~/constants/note.schema";

const state = reactive({
  open: false,
});

export const fnNoteDialog = () => {
  function toggle() {
    state.open = !state.open;
  }

  return {
    state,
    toggle,
  };
};

export const fnAddNote = () => {
  const formSchema = toTypedSchema(ADD_NOTE_SCHEMA);

  const { handleSubmit, resetForm } = useForm({
    validationSchema: formSchema,
  });

  return {
    resetForm,
    handleSubmit,
  };
};
