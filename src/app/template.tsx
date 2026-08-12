"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Route-entrance transition. Opacity only — transforms or filters here
 * would create a containing block and break the fixed nav/cursor/FABs.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
