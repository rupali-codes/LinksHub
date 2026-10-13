---
test: ../navigation_test.md
status: passed
started: 2026-10-13T11:05:01.433Z
duration_s: 125
session_id: cc809118-7fc2-47ab-ab87-dfc19d80868a
---

# Browse categories from the sidebar — Result

## Open the home page ✓ passed (30.7s)
md5: ab67c9bb9635e83ee915bb901a5f4a46
Open http://localhost:3000.
Verify the LinksHub logo is visible in the header and the sidebar lists categories including "Frontend" and "Backend".

## Open a category ✓ passed (29.3s)
md5: c814082e549f224976b4fb28acb9846b
Click the "Frontend" category in the sidebar to expand it.
Verify subcategories including "React" are listed under Frontend.

## Open a subcategory ✓ passed (40s)
md5: 2d6eed5a12d0c23ebd01964e4c4992d3
Click the "React" subcategory.
Verify the URL contains "/frontend/react" and at least one resource card with a "Visit site" link is displayed.
