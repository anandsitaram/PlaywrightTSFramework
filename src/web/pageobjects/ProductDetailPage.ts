import { BasePage } from './BasePage';
import {Page,Locator} from '@playwright/test'
export class ProductDetailPage extends BasePage {

    private readonly productName:Locator;
    private readonly productQty:Locator;
    private readonly productPrice:Locator;
    private readonly addToCartBtn:Locator;
    private readonly countNumber:Locator;

    constructor(page:Page) {
        super(page);
        this.productName = this.page.locator("h1[class='page-title'] span");
        this.productPrice = this.page.locator("div[class='product-info-price'] >> span[class='price']");
        this.productQty = this.page.locator("#qty");
        this.addToCartBtn = this.page.locator("#product-addtocart-button");
        this.countNumber = this.page.locator(".counter-number");
    }

    /**
     * Gets the name of the product.
     * @returns {Promise<string>} The product name as a string.
     */
    async getProductName() {
        return await this.productName.textContent();
    }

    /**
     * Gets the price of the product.
     * @returns {Promise<string>} The product price as a string.
     */
    async getProductPrice() {
        return await this.productPrice.textContent();
    }

    /**
     * Selects the product size.
     * @param {string} size - The size of the product to select.
     */
    async selectProductSize(size:string) {
        await this.page.locator(`div[option-label='${size}']`).click();
    }

    /**
     * Selects the product color.
     * @param {string} color - The color of the product to select.
     */
    async selectProductColor(color:string) {
        await this.page.locator(`div[option-label='${color}']`).click();
    }

    /**
     * Fills the quantity input with the specified quantity.
     * @param {string} qty - The quantity to set for the product.
     */
    async selectQty(qty:string) {
        await this.productQty.fill(qty);
    }

    /**
     * Clicks the "Add to Cart" button to add the product to the cart.
     */
    async addProductToCart() {
        await this.addToCartBtn.click();
    }

    /**
     * Waits for the cart item count to be visible.
     */
    async waitForCountNumber() {
        await this.countNumber.waitFor({ state: 'visible' });
    }
}

