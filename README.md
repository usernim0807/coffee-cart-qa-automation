# Coffee Cart – Playwright Test Automation

**Prepared by:** Jasmin Rize Calicdan  
**Assessment:** Junior Tech Associate (QA) – Part 2  
**Application Under Test:** [Coffee Cart](https://coffee-cart.app/)

---

## 1. Project Overview

This project is an automated UI testing framework for the Coffee Cart web application, developed as part of the Junior Tech Associate (QA) Technical Assessment – Part 2.

The framework uses Playwright with TypeScript to automate essential user workflows, validate application behavior, and verify promotional features.

The primary objective is to ensure that key application functionalities work as expected through automated end-to-end testing.

## 2. Technologies Used

- **Playwright** – Browser automation and UI testing
- **TypeScript** – Programming language
- **Node.js** – JavaScript runtime environment
- **Git & GitHub** – Version control and repository hosting
- **GitHub Actions** – Continuous Integration (CI)

## 3. Project Structure

```text
coffee-cart-qa-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── test-fixtures.ts
├── pages/
│   └── CoffeeCartPage.ts
├── test-data/
│   └── coffee-data.ts
├── tests/
│   └── coffee-cart.spec.ts
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

## 4. Automated Test Scenarios

The framework currently includes **8 automated test cases** covering the application's core functionalities and promotional features.

| # | Test Scenario |
|---|---|
| 1 | Verify that the Coffee Cart homepage loads successfully |
| 2 | Verify that coffee is not added when the user selects "No" |
| 3 | Verify that coffee is added when the user selects "Yes" |
| 4 | Verify successful checkout and payment submission |
| 5 | Verify coffee title translation to Chinese on double-click |
| 6 | Verify that the promotional offer can be skipped |
| 7 | Verify that promotional Mocha can be accepted |
| 8 | Verify that the promotional popup appears at cart items 3, 6, and 9 |

## 5. Framework Design

The project follows the **Page Object Model (POM)** approach to separate page interactions from test logic and improve maintainability.

- **Pages:** Contains reusable page methods and locators.
- **Fixtures:** Provides a custom Playwright fixture for the Coffee Cart page.
- **Test Data:** Stores product information, customer details, and expected results separately from test logic.
- **Tests:** Contains automated test scenarios and assertions.
- **GitHub Actions:** Executes the automated test suite through a CI workflow.

## 6. Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/usernim0807/coffee-cart-qa-automation.git
cd coffee-cart-qa-automation
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

## 7. Running the Tests

### Run All Automated Tests

```bash
npm test
```

### View the HTML Test Report

```bash
npm run test:report
```

## 8. Continuous Integration

This project uses **GitHub Actions** to automatically execute the Playwright test suite through the configured CI workflow.

The workflow configuration is located at:

`.github/workflows/playwright.yml`

It helps verify that the automated tests execute successfully whenever changes are pushed to the repository.

## 9. Test Results

The project currently contains **8 automated UI test cases** covering:

- Homepage loading
- Product selection and cart interactions
- Checkout and payment submission
- Product title translation
- Promotional offer handling
- Promotional popup behavior at every third cart item

The test suite has been executed locally and through GitHub Actions.

## 10. Repository

**GitHub Repository:**  
https://github.com/usernim0807/coffee-cart-qa-automation

*Developed as part of the Junior Tech Associate (QA) Technical Assessment – Part 2.*