import { BasePage } from './BasePage';
import {Page,Locator} from '@playwright/test'
export class OrderSuccessPage extends BasePage {

    private readonly orderNoTxt:Locator;
    private readonly orderSuccessHeader:Locator;

    constructor(page:Page) {
        super(page);
        this.orderNoTxt = page.locator("div[class='checkout-success'] p span");
        this.orderSuccessHeader = page.locator("//*[text()='Thank you for your purchase!']");
    }

    /**
     * Retrieves the order number from the success message.
     * @returns {Promise<string>} The order number as a string.
     */
    async getOrderNo() {
        return await this.orderNoTxt.textContent();
    }

    /**
     * Waits for the order success page to fully load.
     */
    async waitForPageToLoad() {
        await this.orderSuccessHeader.waitFor({ state: 'attached' });
    }
}


