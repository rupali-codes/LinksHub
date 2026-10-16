---
test: ../search_test.md
status: passed
started: 2026-10-13T11:16:00.673Z
duration_s: 128
session_id: 78d52146-9d30-4010-b783-71fea643af83
---

# Search for resources — Result

## Open the home page ✓ passed (23.1s)
md5: 10d81f178e89d3bd696008931a4e68b0
Open http://localhost:3000.
Verify the "Quick search..." input is visible.

## Search for a subcategory name ✓ passed (36s)
md5: 5843e6b0aa5cd6b90dc76e08f722c75d
Type "react" into the "Quick search..." input and press Enter.
Wait for the page to finish loading.
Verify the URL contains "/frontend/react".

## Search by keyword ✓ passed (39.7s)
md5: 8fe08392a1cbb57969c220eb9b8ea202
Open http://localhost:3000.
Type "tutorial" into the "Quick search..." input and press Enter.
Wait for the page to finish loading.
Verify the URL contains "/search?query=tutorial" and at least one "Visit site" link is visible on the page.

## Search with no matches ✓ passed (25.4s)
md5: d2f51b97027eb24d1bdf7ce40fe2897e
Open http://localhost:3000/search?query=zzqxnotarealtopic.
Wait for the page to finish loading.
Verify no "Visit site" links are visible on the page.
