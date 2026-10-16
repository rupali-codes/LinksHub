---
mode: testing
url: http://localhost:3000
max_steps: 20
tags: [smoke, search]
---

# Search for resources

## Open the home page
Open http://localhost:3000.
Verify the "Quick search..." input is visible.

## Search for a subcategory name
Type "react" into the "Quick search..." input and press Enter.
Wait for the page to finish loading.
Verify the URL contains "/frontend/react".

## Search by keyword
Open http://localhost:3000.
Type "tutorial" into the "Quick search..." input and press Enter.
Wait for the page to finish loading.
Verify the URL contains "/search?query=tutorial" and at least one "Visit site" link is visible on the page.

## Search with no matches
Open http://localhost:3000/search?query=zzqxnotarealtopic.
Wait for the page to finish loading.
Verify no "Visit site" links are visible on the page.
