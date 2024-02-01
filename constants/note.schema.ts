import * as z from "zod";

export const ADD_NOTE_SCHEMA = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type ADD_NOTE = z.infer<typeof ADD_NOTE_SCHEMA>;
