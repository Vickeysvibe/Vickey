import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the intro and every section", () => {
  render(<App />);
  expect(screen.getByText(/I'm Vigneshwaran/i)).toBeInTheDocument();
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
