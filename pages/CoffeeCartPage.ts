
import { Page, Locator } from '@playwright/test';

export class CoffeeCartPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  getCoffee(coffeeName: string): Locator {
    return this.page.locator('li').filter({
      has: this.page.locator(
        `[aria-label="${coffeeName}"]`
      ),
    });
  }

  async addCoffeeByName(coffeeName: string) {
    await this.getCoffee(coffeeName).click();
  }

  async rightClickCoffee(coffeeName: string) {
    await this.getCoffee(coffeeName).click({
      button: 'right',
    });
  }

  async confirmAddCoffee() {
    await this.page.locator('dialog').getByRole('button', {
      name: 'Yes',
    }).click();
  }

  async cancelAddCoffee() {
    await this.page.locator('dialog').getByRole('button', {
      name: 'No',
    }).click();
  }

  async proceedToCheckout() {
    await this.page.getByRole('button', {
      name: 'Proceed to checkout',
    }).click();
  }

  async fillPaymentDetails(name: string, email: string) {
    await this.page.getByLabel('Name').fill(name);
    await this.page.getByLabel('Email').fill(email);
  }

  async submitPayment() {
    await this.page.getByRole('button', {
      name: 'Submit',
    }).click();
  }

async doubleClickCoffeeTitle(coffeeName: string) {
  const coffeeTitle = this.page
    .locator('li')
    .filter({
      has: this.page.locator(
        `[aria-label="${coffeeName}"]`
      ),
    })
    .locator('h4');

  await coffeeTitle.dblclick();
  
}

async doubleClickCoffeeTitle(coffeeName: string) {
  const coffeeTitle = this.page
    .locator('li')
    .filter({
      has: this.page.locator(
        `[aria-label="${coffeeName}"]`
      ),
    })
    .locator('h4');

  await coffeeTitle.dblclick();
}


async skipPromoOffer() {
  await this.page.getByRole('button', {
    name: "Nah, I'll skip.",
  }).click();
}

async acceptPromoOffer() {
  await this.page.getByRole('button', {
    name: 'Yes, of course!',
  }).click();
}

}
