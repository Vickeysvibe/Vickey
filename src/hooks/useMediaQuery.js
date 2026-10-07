import { useEffect, useState } from "react";

// Keep in sync with the `max-width: 999px` media queries in src/css.
export const MOBILE_QUERY = "(max-width: 999px)";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
