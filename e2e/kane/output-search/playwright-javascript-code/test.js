import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "acaa5cc0-95f0-45be-88d7-2b29664a0249",
  "name": "Search Functionality Verification",
  "tcId": "TC-147",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Search Functionality Verification", async (page) => {
  let element_0, element_1;
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "b66f3359-b562-446f-9462-fc16af0ef288" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("whether the Quick search input is visible", { instructionId: "ca31a3e2-0725-43f3-b796-4d96fd194d18" }, async () => {
    setVar("quick_search_input_visible", await testmu.visionQuery(page, "whether the Quick search input is visible", ""));
  });
  
  await testmu.step("Assertion check", { instructionId: "ff9022cc-c4bd-4869-86b9-45269dc445c1" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "the \"Quick search...\" input is visible", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{quick_search_input_visible}}", "store_key": "quick_search_input_visible", "variable_refs": {"{{quick_search_input_visible}}": "true"}}], "sub_checks": [{"description": "the \"Quick search...\" input is visible", "store_key": "quick_search_input_visible", "expected_value": "true", "extracted_value": "{{quick_search_input_visible}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the \"Quick search...\" input is visible"});
  });
  
  await testmu.step("Typing react in Quick search input", { instructionId: "36b2d6a2-33b5-4285-b383-b856e4ca51eb" }, async () => {
    element_0 = page.locator("internal:role=textbox[name=\"Quick search\"i]");
    await element_0.click();
    await element_0.fill("react");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "0a6c8cb7-a3b1-46fe-8eab-26ee2f30387b" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Waiting for the React results page to finish loading", { instructionId: "fe695f79-0dd3-44ca-94db-32ca308e3ae8" }, async () => {
    await page.waitForTimeout(1000);
  });
  
  await testmu.step("Reading the current page URL", { instructionId: "26fa5a4d-2999-4c45-bc69-b696dfeab171" }, async () => {
    setVar("url_contains_frontend_react", page.url());
  });
  
  await testmu.step("Assertion check", { instructionId: "2d7a8418-b47f-4c81-ab91-59d713545aa2" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The current page URL contains \"/frontend/react\".", "passed": true, "operator": "contains", "transforms": [], "json_path": null, "expected": "/frontend/react", "extracted_value": "{{url_contains_frontend_react}}", "store_key": "url_contains_frontend_react", "variable_refs": {"{{url_contains_frontend_react}}": "http://localhost:3000/frontend/react"}}], "sub_checks": [{"description": "The current page URL contains \"/frontend/react\".", "store_key": "url_contains_frontend_react", "expected_value": "/frontend/react", "extracted_value": "{{url_contains_frontend_react}}", "operator": "contains", "transforms": []}], "composite_operator": "and", "claim": "the URL contains \"/frontend/react\""});
  });
  
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "b34126f0-b528-4158-a62c-c60a870c3dd1" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("Typing tutorial in Quick search", { instructionId: "2c53eef2-66cf-4a7d-b71c-d66734e27d70" }, async () => {
    element_1 = page.locator("internal:role=textbox[name=\"Quick search\"i]");
    await element_1.click();
    await element_1.fill("tutorial");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "a540bc06-7c0e-47d5-85ab-1a901d97fbd8" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Waiting 1000 ms for search results to finish loading", { instructionId: "3d0676a5-3f63-4656-8e34-1ff84eb01855" }, async () => {
    await page.waitForTimeout(1000);
  });
  
  await testmu.step("Reading the current page URL", { instructionId: "dad8267b-062d-4d1a-b979-adca49276a51" }, async () => {
    setVar("search_url_check", page.url());
  });
  
  await testmu.step("Checking visibility of a Visit site link", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("visit_site_link_visible", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {169: 0};\n  const el = (i) => els[__m[i]];\n  const __v = ((() => { const e = el(169); const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return !!(r.width && r.height && s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0'); })());\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"Visit site\"i] >> nth=0"], query: "whether at least one Visit site link is visible on the page", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "at least one \"Visit site\" link is visible on the page" }));
  });
  
  await testmu.step("Assertion check", { instructionId: "864fe951-ad00-4cf1-98ed-9158b363d138" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "the URL contains \"/search?query=tutorial\"", "passed": true, "operator": "contains", "transforms": [], "json_path": null, "expected": "/search?query=tutorial", "extracted_value": "{{search_url_check}}", "store_key": "search_url_check", "variable_refs": {"{{search_url_check}}": "http://localhost:3000/search?query=tutorial"}}, {"description": "at least one \"Visit site\" link is visible on the page", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{visit_site_link_visible}}", "store_key": "visit_site_link_visible", "variable_refs": {"{{visit_site_link_visible}}": "true"}}], "sub_checks": [{"description": "the URL contains \"/search?query=tutorial\"", "store_key": "search_url_check", "expected_value": "/search?query=tutorial", "extracted_value": "{{search_url_check}}", "operator": "contains", "transforms": []}, {"description": "at least one \"Visit site\" link is visible on the page", "store_key": "visit_site_link_visible", "expected_value": "true", "extracted_value": "{{visit_site_link_visible}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the URL contains \"/search?query=tutorial\" and at least one \"Visit site\" link is visible on the page"});
  });
  
  await testmu.step("Navigate to http://localhost:3000/search?query=zzqxnotarealtopic", { instructionId: "cc8de276-52ed-4d03-827e-44f38237d8d4" }, async () => {
    await page.goto("http://localhost:3000/search?query=zzqxnotarealtopic");
  });
  
  await testmu.step("Waiting for the page to finish loading", { instructionId: "53de7870-e03d-4611-96bc-cbd6f7c02896" }, async () => {
    await page.waitForTimeout(1000);
  });
  
  await testmu.step("whether any Visit site link is visible on the page", { instructionId: "ff166270-4b28-42f8-9d32-62b43069329c" }, async () => {
    setVar("visit_site_links_not_visible", await testmu.visionQuery(page, "whether any Visit site link is visible on the page", ""));
  });
  
  await testmu.step("Assertion check", { instructionId: "6f052afc-5841-4d63-8851-0b6db8f6bc6e" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "No \"Visit site\" links are visible on the page.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "false", "extracted_value": "{{visit_site_links_not_visible}}", "store_key": "visit_site_links_not_visible", "variable_refs": {"{{visit_site_links_not_visible}}": "false"}}], "sub_checks": [{"description": "No \"Visit site\" links are visible on the page.", "store_key": "visit_site_links_not_visible", "expected_value": "false", "extracted_value": "{{visit_site_links_not_visible}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "no \"Visit site\" links are visible on the page."});
  });
});

testmu.run();