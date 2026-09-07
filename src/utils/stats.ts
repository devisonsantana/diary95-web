import type { Entry } from "@/types/entry";

export function evaluateStreak(entries: Entry[]) {
  if (entries.length === 0) return 0;

  // YYYY-MM-DD
  const daysWithEntries = new Set(
    entries.map((entry) => entry.createdAt.slice(0, 10)),
  );

  let streak = 0;
  const cursor = new Date();

  while (true) {
    const key = cursor.toISOString().slice(0, 10);

    if (daysWithEntries.has(key)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0 && isToday(cursor)) {
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

function isToday(date: Date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}
