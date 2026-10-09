// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom implements none of matchMedia, IntersectionObserver or ResizeObserver.
window.matchMedia ??= (query) => ({
  matches: false,
  media: query,
  addEventListener() {},
  removeEventListener() {},
  addListener() {}, // legacy API, still used by framer-motion
  removeListener() {},
});

window.IntersectionObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

window.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

window.scrollTo = () => {};

// jsdom never loads images; resolve them right away so the loader can finish.
window.Image = class {
  set src(_) {
    setTimeout(() => this.onload?.());
  }
};

// Keep tests off the network (the GitHub calendar fetches on mount).
window.fetch = () => Promise.reject(new Error("network disabled in tests"));

// data/photos uses webpack's require.context, which Jest doesn't provide.
jest.mock("./data/photos", () => ({ __esModule: true, default: [] }));
