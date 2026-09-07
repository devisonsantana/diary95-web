import { Link } from "react-router";
import { StatBox, EmptyEntry, EntryCard, Button } from "@/components/ui";
import { useApp } from "@/context/AppContext";
import { evaluateStreak } from "@/utils/stats";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { entries } = useApp();
  const streak = evaluateStreak(entries);

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>DASHBOARD</h1>

      <div className={styles.stats}>
        <StatBox label="Entries" value={entries.length} />
        <StatBox label="Sequence" value={`${streak}d`} />
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>RECENTS</h2>

        {entries.length === 0 ? (
          <EmptyEntry
            title="No entries yet"
            subtitle="Start to write about your day, ideas or discoveries."
            action={
              <Link to="/entry/new">
                <Button variant="primary">NEW ENTRY</Button>
              </Link>
            }
          />
        ) : (
          [...entries]
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .slice(0, 5)
            .map((entry) => <EntryCard key={entry.id} entry={entry} />)
        )}
      </section>
    </div>
  );
}

export default Dashboard;
