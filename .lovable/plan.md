# Standardize project case-study pages

## Changes
- Use one shared case-study layout for every project page instead of a special Bluetooth-only page.
- Place the header image gallery immediately below the project title, then show Tech Stack and Overview beneath it.
- Support two header gallery modes from project data:
  - one wide rectangular image
  - two near-square images side by side
- Keep the middle supporting image row, but remove the final full-width image so each page uses 3–4 images total.
- Preserve each project's existing Objective, challenge/solution pairs, Results, navigation, and circuit-wire decoration.

## Technical details
- Extend the project data model to identify header images separately from supporting images.
- Reuse existing project assets and text; no new content or imagery will be invented.
- Keep the layout responsive by stacking paired images and challenge/solution content on smaller screens.
- Verify representative one-header and two-header project pages at desktop and mobile widths.
