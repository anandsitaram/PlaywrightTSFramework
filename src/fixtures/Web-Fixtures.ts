import { test as core, expect } from '@playwright/test';
import { HomePage } from '../web/pageobjects/HomePage';
import { MenuPage } from '../web/pageobjects/MenuPage'; 
import { CheckoutPage } from '../web/pageobjects/CheckoutPage';
import { OrderSuccessPage } from '../web/pageobjects/OrderSuccessPage';
import { ProductDetailPage } from '../web/pageobjects/ProductDetailPage';
import { ProductListPage } from '../web/pageobjects/ProductListPage';
import { ReviewPage } from '../web/pageobjects/ReviewPage';

const test = core.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    menuPage: async ({ page }, use) => {
        await use(new MenuPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    orderSuccessPage: async ({ page }, use) => {
        await use(new OrderSuccessPage(page));
    },
    productDetailPage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    },
    productListPage: async ({ page }, use) => {
        await use(new ProductListPage(page));
    },
    reviewPage: async ({ page }, use) => {
        await use(new ReviewPage(page));
    },
});

export { test, expect };
