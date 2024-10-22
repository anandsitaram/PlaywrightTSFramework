import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test("Detect the accessibility issues for the website", async ({ page },TestInfo) => {
    await page.goto("https://amazon.in");

    // Analyze the page with axe
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice', 'section508'])
        .analyze();

    // Console log the violations
    const violations = accessibilityScanResults.violations;
    
    if (violations.length === 0) {
        console.log('No accessibility violations found!');
    } else {
        console.log(`Accessibility Violations Found: ${violations.length}\n`);
        violations.forEach((violation, index) => {
            console.log(`Violation ${index + 1}:`);
            console.log(`Impact: ${violation.impact}`);
            console.log(`Description: ${violation.description}`);
            console.log(`Help: ${violation.help}`);
            console.log(`Help URL: ${violation.helpUrl}`);
            console.log('Affected Elements:');
            violation.nodes.forEach((node) => {
                console.log(`- ${node.target}`);
            });
            console.log('\n');
        });

        await TestInfo.attach('accessibility-scan-results', {
            body: JSON.stringify(accessibilityScanResults, null, 2),
        });
    }

   // expect(violations.length).toBe(0);
});
