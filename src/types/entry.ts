export type EntryType = "daily" | "discorevy" | "idea" | "thinking" | "task";

export interface EntryTypeInfo {
  label: string;
  color: string;
}

export const ENTRY_TYPES: Record<EntryType, EntryTypeInfo> = {
  daily: { label: "DAILY", color: "var(--cyan)" },
  discorevy: { label: "DISCOREVY", color: "var(--green)" },
  idea: { label: "IDEA", color: "var(--purple)" },
  thinking: { label: "THINKING", color: "var(--magenta)" },
  task: { label: "TASK", color: "var(--orange)" },
};

export interface Entry {
  id: string;
  title: string;
  content: string;
  types: EntryType[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
