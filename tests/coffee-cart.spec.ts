
import { test, expect } from '../fixtures/test-fixtures';
import { coffeeData } from '../test-data/coffee-data';

// Test 1: Verify homepage loads successfully
test('should load the Coffee Cart homepage', async ({ coffeeCartPage, page }) => {
  await coffeeCartPage.goto();

  await expect(page).toHaveTitle(/Coffee/);
});

// Test 2: Verify coffee is not added when No is selected
test('should not add coffee when No is selected', async ({ coffeeCartPage, page }) => {
  await coffeeCartPage.goto();
  await coffeeCartPage.rightClickCoffee(coffeeData.product.name);

  const popup = page.getByRole('dialog');
  await expect(popup).toBeVisible();

  await coffeeCartPage.cancelAddCoffee();

  await expect(popup).toBeHidden();
  await expect(
    page.getByRole('link', { name: 'Cart page' })
  ).toContainText('cart (0)');
});

// Test 3: Verify coffee is added when Yes is selected
test('should add coffee when Yes is selected', async ({ coffeeCartPage, page }) => {
  await coffeeCartPage.goto();
  await coffeeCartPage.rightClickCoffee(coffeeData.product.name);

  const popup = page.getByRole('dialog');
  await expect(popup).toBeVisible();

  await coffeeCartPage.confirmAddCoffee();

  await expect(popup).toBeHidden();
  await expect(
    page.getByRole('link', { name: 'Cart page' })
  ).toContainText('cart (1)');
});

// Test 4: Verify successful checkout
test('should complete checkout successfully', async ({ coffeeCartPage, page }) => {
  await coffeeCartPage.goto();

  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);
  await coffeeCartPage.proceedToCheckout();

  await coffeeCartPage.fillPaymentDetails(
    coffeeData.customer.name,
    coffeeData.customer.email
  );

  await coffeeCartPage.submitPayment();

  const snackbar = page.locator('.snackbar');

  await expect(snackbar).toContainText(
    coffeeData.expected.successMessage
  );
});

// Test 5: Verify coffee title translates to Chinese and back
test('should translate coffee title to Chinese and back to English', async ({
  coffeeCartPage,
  page,
}) => {
  await coffeeCartPage.goto();

  const coffeeTitle = page
    .locator('li')
    .filter({
      has: page.locator(
        `[aria-label="${coffeeData.product.name}"]`
      ),
    })
    .locator('h4');

  await coffeeCartPage.doubleClickCoffeeTitle(
    coffeeData.product.name
  );

  await expect(coffeeTitle).toContainText(
    coffeeData.expected.translatedName
  );

  await coffeeCartPage.doubleClickCoffeeTitle(
    coffeeData.product.name
  );

  await expect(coffeeTitle).toContainText(
    coffeeData.product.name
  );
});

// Test 6: Verify promo popup appears after adding three coffees
test('should display promo popup after adding three coffees', async ({
  coffeeCartPage,
  page,
}) => {
  await coffeeCartPage.goto();

  // Add three coffees
  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);
  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);
  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);

  // Verify promo popup appears
  const promoPopup = page.getByText(
    coffeeData.promo.message
  );

  await expect(promoPopup).toBeVisible();

  // Skip the promo offer
  await coffeeCartPage.skipPromoOffer();

  // Verify promo popup disappears
  await expect(promoPopup).toBeHidden();

  // Verify cart still contains three coffees
  await expect(
    page.getByRole('link', { name: 'Cart page' })
  ).toContainText('cart (3)');
});
// Test 7: Verify user can accept the promo offer
test('should add promotional Mocha when promo offer is accepted', async ({
  coffeeCartPage,
  page,
}) => {
  await coffeeCartPage.goto();

  // Add three coffees to trigger the promo popup
  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);
  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);
  await coffeeCartPage.addCoffeeByName(coffeeData.product.name);

  // Verify promo popup appears
  const promoPopup = page.getByText(
    coffeeData.promo.message
  );

  await expect(promoPopup).toBeVisible();

  // Accept the promo offer
  await coffeeCartPage.acceptPromoOffer();

  // Verify promo popup disappears
  await expect(promoPopup).toBeHidden();

  // Verify Mocha was added to the cart
  await expect(
    page.getByRole('link', { name: 'Cart page' })
  ).toContainText('cart (4)');
});
