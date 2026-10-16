---
mode: testing
url: http://localhost:3000
max_steps: 20
tags: [smoke, navigation]
---

# Browse categories from the sidebar

## Open the home page
Open http://localhost:3000.
Verify the LinksHub logo is visible in the header and the sidebar lists categories including "Frontend" and "Backend".

## Open a category
Click the "Frontend" category in the sidebar to expand it.
Verify subcategories including "React" are listed under Frontend.

## Open a subcategory
Click the "React" subcategory.
Verify the URL contains "/frontend/react" and at least one resource card with a "Visit site" link is displayed.
