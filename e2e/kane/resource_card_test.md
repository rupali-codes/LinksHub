---
mode: testing
url: http://localhost:3000/frontend/react
max_steps: 20
tags: [cards]
---

# Resource card details

## Open a subcategory page
Open http://localhost:3000/frontend/react.
Verify at least one resource card is displayed with a title, a description and a "Visit site" link.

## Check the external link
Store the href of the first card's "Visit site" link as 'first_resource_url'.
Verify {{first_resource_url}} starts with "http".

## Read the full description
Click the first "...Read More" link on the page.
Verify a dialog opens showing the resource's full description.
