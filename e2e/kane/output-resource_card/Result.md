---
test: ../resource_card_test.md
status: passed
started: 2026-10-13T11:11:17.638Z
duration_s: 102
session_id: 0ee3d8e1-a096-4d03-8ca2-05c8528d0ad8
---

# Resource card details — Result

## Open a subcategory page ✓ passed (30.1s)
md5: 451fb73bb81774fa87eda02f17ab0a94
Open http://localhost:3000/frontend/react.
Verify at least one resource card is displayed with a title, a description and a "Visit site" link.

## Check the external link ✓ passed (35.9s)
md5: cbd9daa34309c9f23823348fdcdc8277
Store the href of the first card's "Visit site" link as 'first_resource_url'.
Verify {{first_resource_url}} starts with "http".

## Read the full description ✓ passed (32.1s)
md5: a4d475345a01162242b2b7e8bcf15dc3
Click the first "...Read More" link on the page.
Verify a dialog opens showing the resource's full description.
