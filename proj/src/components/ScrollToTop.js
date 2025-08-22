import { useEffect } from "react";
import { useLocation } from "react-router-dom";

{
  /* function to jump to the top of the page when moving between pages */
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
