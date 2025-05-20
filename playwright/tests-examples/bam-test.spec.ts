import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://website-dev-bam.harmonyx.works/assessment');
});