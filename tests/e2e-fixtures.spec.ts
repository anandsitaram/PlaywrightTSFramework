import { test, expect } from '../src/fixtures/Web-Fixtures'

import {DateUtils} from '@utils/DateUtils'
import {RandomUtils} from '@utils/RandomUtils'
const testData=JSON.parse(JSON.stringify(require('../testdata/data.json')))


test("New User", { tag :['@newUser','@P1','@automated','@ui','@fixtures']},async ({ homePage,productListPage,productDetailPage,checkoutPage,reviewPage,orderSuccessPage}) => {
    const product = testData.product
    const qty = testData.qty
    await homePage.launchApplication()
    await homePage.mouseHoverOnMainMenu('Men');
    await homePage.mouseHoverOnSubMenu('Tops', 'Tanks');

    await productListPage.clickOnProduct(product);

    expect(await productDetailPage.getProductName()).toBe(product);
    expect(await productDetailPage.getProductPrice()).toBeTruthy();

    await productDetailPage.selectProductSize(testData.size);
    await productDetailPage.selectProductColor(testData.color);
    await productDetailPage.selectQty(qty);
    await productDetailPage.addProductToCart();
    await productDetailPage.waitForCountNumber();

    await productDetailPage.menuPage.openCart();
    await productDetailPage.menuPage.clickCheckoutButton();

    // Checkout Screen
    await checkoutPage.waitForPageToLoad();

    const currentDate = DateUtils.getCurrentDate();
    const addressData = {
        email: "test" + currentDate + "@test.com",
        firstName: "AutoQA",
        lastName: RandomUtils.getRandomLowerCaseString(3),
        streetAddress: testData.streetAddress,
        city: testData.city,
        region: testData.region,
        postCode: testData.postCode,
        mobileNo: testData.mobileNo,
        shippingMethod:testData.shippingMethod  // or "tablerate"
    };

    await checkoutPage.fillCheckoutForm(addressData);
    await checkoutPage.clickContinue();

    // Review
    await reviewPage.waitForPageToLoad();

    // Using expect(locator).toHaveText(expected)
    await expect(await reviewPage.getQuantity()).toHaveText(qty);
    await expect(await reviewPage.getProductName()).toHaveText(product);
    
    await reviewPage.clickOnPlaceOrderBtn();

    // Thank you for your purchase!
    await orderSuccessPage.waitForPageToLoad();

    const orderNo = await orderSuccessPage.getOrderNo();
    console.log(`The order number is ${orderNo}`);
    expect(orderNo).toBeTruthy();
});




