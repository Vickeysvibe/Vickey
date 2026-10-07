// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom implements neither matchMedia nor IntersectionObserver.
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

window.scrollTo = () => {};
