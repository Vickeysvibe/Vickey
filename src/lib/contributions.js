// Public, CORS-enabled mirror of GitHub profile contribution graphs (no token).
const API_URL = "https://github-contributions-api.jogruber.de/v4";

const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

// One request per username, shared by every calendar on the page.
const requests = new Map();

function fetchAccount(username) {
  if (!requests.has(username)) {
    const request = fetch(`${API_URL}/${encodeURIComponent(username)}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error(`${username}: HTTP ${res.status}`);
        return res.json();
      })
      .then(({ contributions }) => {
        return new Map(contributions.map(({ date, count }) => [date, count]));
      })
      .catch((err) => {
        requests.delete(username); // allow a retry on next mount
        throw err;
      });
    requests.set(username, request);
  }
  return requests.get(username);
}

// Resolves to the accounts with a `counts` Map (date -> count), or `counts: null`
// for accounts that failed, so one bad account doesn't hide the others.
export async function loadContributions(accounts) {
  const results = await Promise.allSettled(
    accounts.map(({ username }) => fetchAccount(username)),
  );
  return accounts.map((account, i) => ({
    ...account,
    counts: results[i].status === "fulfilled" ? results[i].value : null,
  }));
}

const pad = (n) => String(n).padStart(2, "0");
const toKey = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

// Intensity 0-4 from quartiles of the non-zero days, like GitHub does.
function levelScale(counts) {
  const sorted = counts.filter(Boolean).sort((a, b) => a - b);
  const q = (p) => sorted[Math.floor(p * (sorted.length - 1))];
  const [q1, q2, q3] = sorted.length ? [q(0.25), q(0.5), q(0.75)] : [0, 0, 0];
  return (count) => {
    if (!count) return 0;
    if (count <= q1) return 1;
    if (count <= q2) return 2;
    if (count <= q3) return 3;
    return 4;
  };
}

// Builds `weekCount` Sunday-first week columns ending today, merging all accounts.
export function buildCalendar(accounts, weekCount, today = new Date()) {
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const start = new Date(end);
  start.setDate(end.getDate() - end.getDay() - (weekCount - 1) * 7);

  const days = [];
  for (const d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const date = toKey(d);
    const breakdown = accounts.map(({ label, counts }) => ({
      label,
      count: counts?.get(date) ?? 0,
    }));
    days.push({
      date,
      month: d.getMonth(),
      count: breakdown.reduce((sum, b) => sum + b.count, 0),
      breakdown,
    });
  }

  const toLevel = levelScale(days.map((day) => day.count));
  days.forEach((day) => (day.level = toLevel(day.count)));

  // Label a week column when its first day starts a new month; drop labels
  // that would collide with the next one.
  const months = [];
  for (let week = 0; week < weekCount; week++) {
    const month = days[week * 7].month;
    if (week === 0 || month !== days[(week - 1) * 7].month) {
      months.push({ week, name: MONTHS[month] });
    }
  }
  const spacedMonths = months.filter(
    (m, i) => !months[i + 1] || months[i + 1].week - m.week >= 3,
  );

  const totals = accounts.map(({ username, label, counts }) => ({
    username,
    label,
    failed: !counts,
    total: days.reduce((sum, day) => sum + (counts?.get(day.date) ?? 0), 0),
  }));

  return {
    days,
    months: spacedMonths,
    totals,
    total: totals.reduce((sum, t) => sum + t.total, 0),
  };
}
