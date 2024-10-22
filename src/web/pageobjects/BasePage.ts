import { MenuPage } from './MenuPage';
import {Page} from '@playwright/test'

export class BasePage {
    
    protected readonly page:Page;
    protected readonly menuPage:MenuPage;
    constructor(page:Page) {
        this.page = page;
        this.menuPage = new MenuPage(page);  // MenuPage is initialized here
    }

    /**
     * Launches the application by navigating to the URL defined in the environment variables.
     * Throws an error if WEB_URL is not defined.
     */
    async launchApplication() {
        const url = process.env.WEB_URL;
        if (!url) {
            throw new Error("WEB_URL is not defined in the environment variables");
        }
        await this.goto(url);
    }

    /**
     * Navigates to a given URL and waits for the page to fully load.
     * @param {string} url - The URL to navigate to.
     */
    async goto(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
    }

    /**
     * Navigates to the provided URL and waits for the page to fully load.
     * @param {string} url - The URL to navigate to.
     */
    async navigateTo(url) {
        await this.goto(url);
    }

    /**
     * Waits for an element to appear on the page.
     * @param {string} selector - The selector for the element to wait for.
     */
    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }

    /**
     * Retrieves the current page URL.
     * @returns {string} - The current URL.
     */
    async getCurrentUrl() {
        return await this.page.url();
    }

    // Other shared methods for all page objects can be added here
}


