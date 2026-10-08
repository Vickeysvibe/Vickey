import { formatDuration, formatMonth, monthsBetween } from "./duration";

test("formats a month", () => {
  expect(formatMonth("2024-06")).toBe("Jun 2024");
});

test("counts start and end months inclusively", () => {
  expect(monthsBetween("2024-01", "2024-03")).toBe(3);
  expect(monthsBetween("2023-11", "2025-01")).toBe(15);
  expect(monthsBetween("2024-05", "2024-05")).toBe(1);
});

test("an ongoing role counts up to today", () => {
  const today = new Date(2026, 9, 8); // Oct 2026
  expect(monthsBetween("2026-01", null, today)).toBe(10);
});

test("formats durations like LinkedIn", () => {
  expect(formatDuration(1)).toBe("1 mo");
  expect(formatDuration(5)).toBe("5 mos");
  expect(formatDuration(12)).toBe("1 yr");
  expect(formatDuration(14)).toBe("1 yr 2 mos");
  expect(formatDuration(27)).toBe("2 yrs 3 mos");
});
