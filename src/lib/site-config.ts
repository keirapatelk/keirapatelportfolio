/**
 * Simple on/off switches for the site's pages.
 * Flip a value to false to hide that page from the nav bar.
 * (Individual projects have their own `visible` flag in src/lib/projects.ts.)
 */
export const pageVisibility = {
  home: true,
  projects: false,
  contact: true,
} as const;
