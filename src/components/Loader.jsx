import React, { useEffect, useState } from "react";
import "../css/loader.css";
import githubAccounts from "../data/github";
import me from "../images/meee.png";
import { loadContributions } from "../lib/contributions";

const MIN_MS = 900; // long enough to read as intentional, not a flicker
const MAX_MS = 5000; // never hold the page hostage to a slow API
const FADE_MS = 700; // keep in sync with .loader transition

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  });

// What the first screen needs before it looks right. The calendar reuses the
// same GitHub requests, so nothing is fetched twice.
const TASKS = [
  () => loadImage(me),
  () => loadContributions(githubAccounts),
  () => document.fonts?.ready,
];

// Only the landing page of a visit gets the loader, not later navigations.
let shown = window.location.pathname !== "/";

export const Loader = () => {
  const [phase, setPhase] = useState(shown ? "gone" : "loading");
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => {
    if (phase !== "loading") return undefined;
    const root = document.documentElement;
    root.dataset.loading = ""; // pauses intro animations, locks scroll
    let cancelled = false;
    let fadeTimer;

    // Don't flash the logo in a fallback font
    Promise.resolve(document.fonts?.load("56px Pacifico")).then(
      () => !cancelled && setLogoReady(true),
    );

    const tasks = TASKS.map((task) =>
      Promise.resolve()
        .then(task)
        .catch(() => {}),
    );
    const ready = Promise.all([
      Promise.all(tasks),
      new Promise((r) => setTimeout(r, MIN_MS)),
    ]);
    const timeout = new Promise((r) => setTimeout(r, MAX_MS));

    Promise.race([ready, timeout]).then(() => {
      if (cancelled) return;
      shown = true;
      delete root.dataset.loading; // intro animations start as the loader fades
      setPhase("leaving");
      fadeTimer = setTimeout(() => setPhase("gone"), FADE_MS);
    });

    return () => {
      cancelled = true;
      clearTimeout(fadeTimer);
      delete root.dataset.loading;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={phase === "leaving" ? "loader is-leaving" : "loader"}
      role="status"
      aria-label="Loading"
    >
      <span className={logoReady ? "loader-logo is-ready" : "loader-logo"}>
        Vibe
      </span>
    </div>
  );
};
