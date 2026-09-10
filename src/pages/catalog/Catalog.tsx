import { useState, useMemo } from "react";
import { Link } from "react-router";
import { useApp } from "@/context/AppContext";
import { filterEntries } from "@/utils/filter";
import type { EntryType } from "@/types/entry";
import { SearchInput } from "@/components/ui/search-input/SearchInput";
import { TypeSelector } from "@/components/ui/type-selector/TypeSelector";
import { EntryCard } from "@/components/ui/entry-card/EntryCard";
import { EmptyEntry } from "@/components/ui/empty-entry/EmptyEntry";
import { Button } from "@/components/ui/button/Button";
import styles from "./Catalog.module.css";

function Catalog() {
  const { entries } = useApp();
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState<EntryType[]>([]);

  const filtered = useMemo(
    () => filterEntries(entries, { search, types }),
    [entries, search, types],
  );

  const hasEntries = entries.length > 0;
  const hasResults = filtered.length > 0;

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>CATALOG</h1>

      {hasEntries && (
        <div className={styles.filters}>
          <SearchInput value={search} onChange={setSearch} />
          <TypeSelector selected={types} onChange={setTypes} />
        </div>
      )}

      {!hasEntries ? (
        <EmptyEntry
          title="Nenhuma entrada ainda."
          subtitle="Comece a registrar seu dia, suas ideias e descobertas."
          action={
            <Link to="/entry/new">
              <Button variant="primary">NOVA ENTRADA</Button>
            </Link>
          }
        />
      ) : !hasResults ? (
        <EmptyEntry
          title="Nada encontrado."
          subtitle="Tente outro termo de busca ou remova os filtros de tipo."
        />
      ) : (
        <div className={styles.list}>
          {filtered.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;
