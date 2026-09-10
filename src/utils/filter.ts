import type { Entry, EntryType } from "@/types/entry";
import { stripHtml } from "./html";

type FilterOptions = {
  search: string;
  types: EntryType[];
};

/**
 * Filtra entradas por texto (título + conteúdo) e por tipos selecionados.
 * Busca é case-insensitive. Filtro de tipo é "OR": basta a entrada ter
 * pelo menos um dos tipos selecionados para aparecer.
 */
export function filterEntries(
  entries: Entry[],
  { search, types }: FilterOptions,
) {
  const query = search.trim().toLowerCase();

  return entries.filter((entry) => {
    const matchesSearch =
      query === "" ||
      entry.title.toLowerCase().includes(query) ||
      stripHtml(entry.content).toLowerCase().includes(query);

    const matchesType =
      types.length === 0 || entry.types.some((t) => types.includes(t));

    return matchesSearch && matchesType;
  });
}
