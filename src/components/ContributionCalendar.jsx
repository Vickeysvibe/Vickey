import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "../css/calendar.css";
import githubAccounts from "../data/github";
import { buildCalendar, loadContributions } from "../lib/contributions";

const MAX_WEEKS = 53;
const MIN_CELL = 9; // px; below this the squares get hard to read
const GAP = 3; // px; keep in sync with calendar.css

const PLACEHOLDER = githubAccounts.map((account) => ({
  ...account,
  counts: null,
}));

const periodLabel = (weeks) =>
  weeks >= 52
    ? "the last year"
    : `the last ${Math.round((weeks * 7) / 30)} months`;

const describeDay = ({ date, count, breakdown }) => {
  const parts = breakdown
    .filter((b) => b.count)
    .map((b) => `${b.label} ${b.count}`);
  const detail = parts.length > 1 ? ` (${parts.join(", ")})` : "";
  return `${count} contribution${count === 1 ? "" : "s"} on ${date}${detail}`;
};

// Fits as many week columns as the container allows (up to a year) so the
// squares stay readable in narrow columns.
function useFittedWeeks(ref) {
  const [weeks, setWeeks] = useState(26);

  useLayoutEffect(() => {
    const el = ref.current;
    const fit = () => {
      const width = el.getBoundingClientRect().width;
      if (!width) return; // hidden (e.g. the other layout); keep last value
      setWeeks(
        Math.min(MAX_WEEKS, Math.floor((width + GAP) / (MIN_CELL + GAP))),
      );
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return weeks;
}

// GitHub-style contribution graph merged across every account in data/github.js.
export const ContributionCalendar = () => {
  const gridRef = useRef(null);
  const weeks = useFittedWeeks(gridRef);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    let active = true;
    loadContributions(githubAccounts).then((result) => {
      if (active) setAccounts(result);
    });
    return () => {
      active = false;
    };
  }, []);

  const { days, months, totals, total } = useMemo(
    () => buildCalendar(accounts ?? PLACEHOLDER, weeks),
    [accounts, weeks],
  );

  const loading = !accounts;
  const failed = !loading && totals.every((t) => t.failed);
  const heading = loading
    ? "Loading GitHub activity…"
    : failed
      ? "GitHub activity is unavailable right now"
      : `${total.toLocaleString()} contributions in ${periodLabel(weeks)}`;

  return (
    <section
      className="contrib"
      style={{ "--weeks": weeks }}
      aria-busy={loading}
    >
      <h2>{heading}</h2>
      <div className="contrib-months" aria-hidden="true">
        {months.map(({ week, name }) => (
          <span key={week} style={{ gridColumn: week + 1 }}>
            {name}
          </span>
        ))}
      </div>
      <div
        ref={gridRef}
        className="contrib-grid"
        role="img"
        aria-label={heading}
      >
        {days.map((day) => (
          <span
            key={day.date}
            className={`contrib-cell level-${day.level}`}
            title={loading ? undefined : describeDay(day)}
          />
        ))}
      </div>
      <footer className="contrib-legend">
        <div className="contrib-accounts">
          {totals.map(({ username, label, total, failed }) => (
            <a
              key={username}
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              title={failed ? `Couldn't load @${username}` : `@${username}`}
            >
              {label} <span>{loading ? "–" : failed ? "!" : total}</span>
            </a>
          ))}
        </div>
        <div className="contrib-scale" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <span key={level} className={`contrib-cell level-${level}`} />
          ))}
          More
        </div>
      </footer>
    </section>
  );
};
