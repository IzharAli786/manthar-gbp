/** Shared between the server layout (inline script) and the Preloader. */

export const INTRO_SEEN_KEY = "ma-intro-seen";

/**
 * Inline <head>-of-body script — must run before first paint.
 * Opts into the intro overlay via `data-intro="1"` on <html>,
 * skipping repeat visits and prefers-reduced-motion.
 */
export const INTRO_SCRIPT = `(function(){try{if(!sessionStorage.getItem("${INTRO_SEEN_KEY}")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.intro="1"}}catch(e){}})()`;
