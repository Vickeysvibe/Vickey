const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

// Dates are "YYYY-MM" strings, e.g. "2024-06".
const parse = (ym) => {
  const [year, month] = ym.split("-").map(Number);
  return { year, month };
};

export const formatMonth = (ym) => {
  const { year, month } = parse(ym);
  return `${MONTHS[month - 1]} ${year}`;
};

// Counts both the start and end month, like LinkedIn: Jan–Mar is 3 months.
// A missing `end` means the role is ongoing and counts up to `today`.
export function monthsBetween(start, end, today = new Date()) {
  const from = parse(start);
  const to = end
    ? parse(end)
    : { year: today.getFullYear(), month: today.getMonth() + 1 };
  return Math.max(1, (to.year - from.year) * 12 + (to.month - from.month) + 1);
}

// 14 -> "1 yr 2 mos", 12 -> "1 yr", 1 -> "1 mo"
export function formatDuration(months) {
  const plural = (n, unit) => (n ? `${n} ${unit}${n > 1 ? "s" : ""}` : "");
  return [plural(Math.floor(months / 12), "yr"), plural(months % 12, "mo")]
    .filter(Boolean)
    .join(" ");
}
