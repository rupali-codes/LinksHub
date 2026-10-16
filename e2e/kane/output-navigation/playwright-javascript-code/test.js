import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "26ba580f-20c2-4791-a348-af491ff69a60",
  "name": "Verify Frontend React Resources",
  "tcId": "TC-143",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Verify Frontend React Resources", async (page) => {
  let element_0, element_1;
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "5ac891c3-06dd-4093-b60f-c19ccc516950" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("Checking the LinksHub logo visibility in the header", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("linkshub_logo_visible", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {4: 0};\n  const el = (i) => els[__m[i]];\n  const __v = ((() => { const logo = el(4).querySelector('svg, img'); if (!logo) return false; const r = logo.getBoundingClientRect(); const s = getComputedStyle(logo); return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0'; })());\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"LinksHub Logo\"i]"], query: "whether the LinksHub logo is visible in the header", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "The LinksHub logo is visible in the header." }));
  });
  
  await testmu.step("Checking the Frontend and Backend categories in the sidebar", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("sidebar_categories", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {34: 0};\n  const el = (i) => els[__m[i]];\n  const __v = ((() => { const frontend = el(34).querySelector('a[href=\"/frontend\"]'); const backend = el(34).querySelector('a[href=\"/backend\"]'); return Boolean(frontend && backend && frontend.textContent.trim() === 'Frontend' && backend.textContent.trim() === 'Backend'); })());\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=list >> internal:has-text=\"Frontend3D\"i"], query: "whether the sidebar category list includes Frontend and Backend", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "The sidebar lists categories including \"Frontend\" and \"Backend\"." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "98e9fde7-693c-4671-83d2-2db1f0665c75" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The LinksHub logo is visible in the header.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{linkshub_logo_visible}}", "store_key": "linkshub_logo_visible", "variable_refs": {"{{linkshub_logo_visible}}": "true"}}, {"description": "The sidebar lists categories including \"Frontend\" and \"Backend\".", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{sidebar_categories}}", "store_key": "sidebar_categories", "variable_refs": {"{{sidebar_categories}}": "true"}}], "sub_checks": [{"description": "The LinksHub logo is visible in the header.", "store_key": "linkshub_logo_visible", "expected_value": "true", "extracted_value": "{{linkshub_logo_visible}}", "operator": "equals", "transforms": []}, {"description": "The sidebar lists categories including \"Frontend\" and \"Backend\".", "store_key": "sidebar_categories", "expected_value": "true", "extracted_value": "{{sidebar_categories}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the LinksHub logo is visible in the header and the sidebar lists categories including \"Frontend\" and \"Backend\""});
  });
  
  await testmu.step("Clicking the frontend category toggle in the sidebar", { instructionId: "f01aae47-c3c7-483f-a1ee-8ec07b20b59e" }, async () => {
    element_0 = page.locator("internal:role=link[name=\"toggle frontend category\"i]");
    await element_0.click();
  });
  
  await testmu.step("Checking whether React appears under Frontend", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("react_subcategory_listed", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {65: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(65).textContent.trim().toLowerCase() === 'react' && el(65).getAttribute('href') === '/frontend/react');\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["a >> internal:has-text=/^react$/"], query: "whether React is listed as a Frontend subcategory", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "\"React\" is listed as a subcategory under Frontend." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "6e3254a8-c219-44d9-a33b-13733ae56caa" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "\"React\" is listed as a subcategory under Frontend.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{react_subcategory_listed}}", "store_key": "react_subcategory_listed", "variable_refs": {"{{react_subcategory_listed}}": "true"}}], "sub_checks": [{"description": "\"React\" is listed as a subcategory under Frontend.", "store_key": "react_subcategory_listed", "expected_value": "true", "extracted_value": "{{react_subcategory_listed}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "Subcategories including \"React\" are listed under Frontend."});
  });
  
  await testmu.step("Clicking Side Navbar Elements link in the Frontend sidebar", { instructionId: "0ccb52d5-000f-4738-afba-e4d15ea5e057" }, async () => {
    element_1 = page.locator("a >> internal:has-text=/^react$/");
    await element_1.click();
  });
  
  await testmu.step("Waiting for the React resource page to finish loading", { instructionId: "5ab5603d-63ec-4292-a770-c16fdb8a47ae" }, async () => {
    await page.waitForTimeout(1000);
  });
  
  await testmu.step("Reading the current page URL", { instructionId: "e8dcd081-817e-4774-aed8-0b1722d231f1" }, async () => {
    setVar("react_url_check", page.url());
  });
  
  await testmu.step("Checking for a Visit site link on a displayed resource card", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("visit_site_resource_card_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {481: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(481) instanceof HTMLAnchorElement && el(481).textContent.trim() === 'Visit site');\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"Visit site\"i] >> nth=0"], query: "whether a displayed resource card has a Visit site link", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "At least one resource card with a \"Visit site\" link is displayed." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "645df416-305d-4df2-b7a6-cd8ba62d9863" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The URL contains \"/frontend/react\".", "passed": true, "operator": "contains", "transforms": [], "json_path": null, "expected": "/frontend/react", "extracted_value": "{{react_url_check}}", "store_key": "react_url_check", "variable_refs": {"{{react_url_check}}": "http://localhost:3000/frontend/react"}}, {"description": "At least one resource card with a \"Visit site\" link is displayed.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{visit_site_resource_card_check}}", "store_key": "visit_site_resource_card_check", "variable_refs": {"{{visit_site_resource_card_check}}": "true"}}], "sub_checks": [{"description": "The URL contains \"/frontend/react\".", "store_key": "react_url_check", "expected_value": "/frontend/react", "extracted_value": "{{react_url_check}}", "operator": "contains", "transforms": []}, {"description": "At least one resource card with a \"Visit site\" link is displayed.", "store_key": "visit_site_resource_card_check", "expected_value": "true", "extracted_value": "{{visit_site_resource_card_check}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the URL contains \"/frontend/react\" and at least one resource card with a \"Visit site\" link is displayed."});
  });
});

testmu.run();