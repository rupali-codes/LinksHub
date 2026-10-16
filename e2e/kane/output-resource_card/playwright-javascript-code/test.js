import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "45ca88f8-4954-4714-8220-d0785bb60ed3",
  "name": "Verify Resource Card and View Full Description",
  "tcId": "TC-145",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Verify Resource Card and View Full Description", async (page) => {
  let element_0;
  await testmu.step("Navigate to http://localhost:3000/frontend/react", { instructionId: "b11532ce-9f63-45ca-b7b6-c814bdb22c44" }, async () => {
    await page.goto("http://localhost:3000/frontend/react");
  });
  
  await testmu.step("Checking the content of a displayed resource card", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("resource_card_content_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {473: 0};\n  const el = (i) => els[__m[i]];\n  const __v = ((() => { const card = el(473); const title = card.querySelector('h2')?.textContent.trim(); const description = [...card.querySelectorAll('p, div')].map(n => n.textContent.trim()).find(t => t === 'a very nice repository and a challenge at the same time to learn ReactJS'); const visit = [...card.querySelectorAll('a')].find(a => a.textContent.trim() === 'Visit site' && a.getAttribute('href')); return Boolean(title && description && visit); })());\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=article >> internal:has-text=\"30 days of Reacta very nice\"i"], query: "whether a displayed resource card contains a title, a description, and a Visit site link", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "At least one resource card is displayed with a title, a description and a \"Visit site\" link." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "4e15e34b-52d5-4616-ac21-6d142d02d517" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "At least one resource card is displayed with a title, a description and a \"Visit site\" link.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{resource_card_content_check}}", "store_key": "resource_card_content_check", "variable_refs": {"{{resource_card_content_check}}": "true"}}], "sub_checks": [{"description": "At least one resource card is displayed with a title, a description and a \"Visit site\" link.", "store_key": "resource_card_content_check", "expected_value": "true", "extracted_value": "{{resource_card_content_check}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "at least one resource card is displayed with a title, a description and a \"Visit site\" link"});
  });
  
  await testmu.step("Reading the first resource Visit site URL", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("first_resource_url", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {481: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(481).getAttribute('href'));\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"Visit site\"i] >> nth=0"], query: "the href of the first resource card's Visit site link", expectedValue: "", needsUnitConversion: false, operator: "equals", transforms: ["strip"], condition: "the href of the first card's \"Visit site\" link is stored as {{first_resource_url}}" }));
  });
  
  await testmu.step("Reading the first resource URL protocol prefix", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("first_resource_url_starts_with_http_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {481: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(481).href.slice(0, 4));\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"Visit site\"i] >> nth=0"], query: "the first resource URL protocol prefix", expectedValue: "http", needsUnitConversion: false, operator: "equals", transforms: [], condition: "{{first_resource_url}} starts with \"http\"" }));
  });
  
  await testmu.step("Assertion check", { instructionId: "ddc77bfb-346f-412d-ac0b-6b1a614db50a" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "{{first_resource_url}} starts with \"http\"", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "http", "extracted_value": "{{first_resource_url_starts_with_http_check}}", "store_key": "first_resource_url_starts_with_http_check", "variable_refs": {"{{first_resource_url_starts_with_http_check}}": "http", "{{first_resource_url}}": "https://github.com/Asabeneh/30-Days-Of-React"}}], "sub_checks": [{"description": "{{first_resource_url}} starts with \"http\"", "store_key": "first_resource_url_starts_with_http_check", "expected_value": "http", "extracted_value": "{{first_resource_url_starts_with_http_check}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "{{first_resource_url}} starts with \"http\""});
  });
  
  await testmu.step("Clicking the first Read More control in the main results grid", { instructionId: "3573f5ef-24b2-439e-a6b3-abaae50c4581" }, async () => {
    element_0 = page.locator("internal:text=\"...Read More\"i >> nth=0");
    await element_0.click();
  });
  
  await testmu.step("Checking the full-description dialog", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("resource_full_description_dialog", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {2: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (!!(el(2).getClientRects().length && Array.from(el(2).querySelectorAll('p')).some(p => p.textContent.trim().length > 0)));\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=dialog[name=\"Fullstack Open Popup\"i]"], query: "whether the resource full-description dialog is visible and contains a description", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "A dialog opens showing the resource's full description." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "ba113740-ba91-4f78-bd79-2b774cc98194" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "A dialog opens showing the resource's full description.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{resource_full_description_dialog}}", "store_key": "resource_full_description_dialog", "variable_refs": {"{{resource_full_description_dialog}}": "true"}}], "sub_checks": [{"description": "A dialog opens showing the resource's full description.", "store_key": "resource_full_description_dialog", "expected_value": "true", "extracted_value": "{{resource_full_description_dialog}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "a dialog opens showing the resource's full description."});
  });
});

testmu.run();