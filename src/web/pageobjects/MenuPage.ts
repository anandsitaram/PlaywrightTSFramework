import {Page,Locator} from '@playwright/test'

export class MenuPage {
    private readonly page:Page;
    private readonly cartLinkLocator:Locator;
    private readonly checkoutButtonLocator:Locator;
    constructor(page:Page) {
        this.page = page;
        this.cartLinkLocator = page.locator("a[class*='showcart']");
        this.checkoutButtonLocator = page.locator("button[id*='top-cart-btn-checkout']");
    }

    /**
     * Opens the cart by clicking the cart icon after waiting for it to be attached to the DOM.
     */
    async openCart() {
        await this.page.waitForTimeout(2000);  // Small timeout to ensure UI stability
        await this.cartLinkLocator.waitFor({ state: 'attached' });
        await this.cartLinkLocator.click();
    }

    /**
     * Waits for and clicks the checkout button.
     */
    async clickCheckoutButton() {
        // Wait for the checkout button to be attached and visible, then click it
        await this.checkoutButtonLocator.waitFor({ state: 'visible' });
        await this.checkoutButtonLocator.click();
    }
}

