# End-to-end (e2e) tests for web

Browser end-to-end tests for LinksHub, authored with [KaneCLI](https://www.testmuai.com/kane-cli/) by TestMu AI. Each test is a plain-English `_test.md` file; KaneCLI runs it in a real Chrome browser and records each step so later runs replay without re-authoring.

| Test | What it covers |
|---|---|
| `navigation_test.md` | Home page loads, sidebar categories, Frontend → React subcategory shows resource cards |
| `search_test.md` | Search by subcategory name, search by keyword, search with no matches |
| `resource_card_test.md` | Resource cards show a title, description and a valid "Visit site" link; "Read More" opens the full description |

## Run the tests

Start the app locally first:

```bash
pnpm install
pnpm dev
```

### With KaneCLI

```bash
npm install -g @testmuai/kane-cli
kane-cli login
kane-cli testmd run e2e/kane/navigation_test.md --agent
kane-cli testmd run e2e/kane/search_test.md --agent
kane-cli testmd run e2e/kane/resource_card_test.md --agent
```

### With the exported Playwright code

Each test also has an exported Playwright (JavaScript) version under `output-<test>/playwright-javascript-code/`:

```bash
cd e2e/kane/output-navigation/playwright-javascript-code
npm install
npx playwright install chromium
node test.js
```

Copy `.env.example` to `.env` and fill in your TestMu AI (LambdaTest) credentials first.

## Editing a test

Edit the step text in the `_test.md` file and run it again with `kane-cli testmd run`. Changed steps (and the steps after them) are re-recorded; unchanged steps replay from `output-<test>/`.
