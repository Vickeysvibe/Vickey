import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the intro and every section", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /I'm Vigneshwaran/i }),
  ).toBeInTheDocument();
  for (const heading of [
    "Skills",
    "Projects",
    "Professional Experiences",
    "Blog",
    "Contact me",
  ]) {
    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
  }
});

test("renders the personal page on /personal", () => {
  window.history.pushState({}, "", "/personal");
  render(<App />);
  expect(
    screen.getByRole("heading", { name: "Off the clock" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Photos coming soon.")).toBeInTheDocument();
  window.history.pushState({}, "", "/");
});
