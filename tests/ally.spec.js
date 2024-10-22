import {test,expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test("Detect the accessibility issues for the website", async ({ page }) => {
    await page.goto("https://broken-workshop.dequelabs.com/");

    //Analyze the page with axe
    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

    //Console log the violations
    let violation = accessibilityScanResults.violations;
    violation.forEach(function (entry) {
      console.log(
        "Print the Violations:",
        entry.impact + " " + entry.description
      );
    });

    let count = violation.length;

    //Expect violations to be empty
    console.log("List of Violations:", violation);
    expect(count).toEqual(2);
    // expect(accessibilityScanResults.violations).toEqual([]);
  });