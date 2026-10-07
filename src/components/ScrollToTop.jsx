import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the previous page's scroll offset; reset it on navigation.
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
