import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";

test("renders the intro and every section once the loader finishes", async () => {
  render(<App />);
  await waitForElementToBeRemoved(
    () => screen.queryByRole("status", { name: "Loading" }),
    { timeout: 4000 },
  );
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
  expect(screen.queryByRole("status", { name: "Loading" })).toBeNull();
  expect(
    screen.getByRole("heading", { name: "Off the clock" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Photos coming soon.")).toBeInTheDocument();
  window.history.pushState({}, "", "/");
});
