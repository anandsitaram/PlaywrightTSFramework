# Playwright Automation Framework Using TypeScript

## Overview
This is an automation framework designed for testing an sample e-commerce application developed using magento using Playwright. The framework follows the Page Object Model (POM) design pattern to enhance code reusability and maintainability.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Playwright**: Automation library for browser testing.
- **DotEnv**: Handling multiple environment
- **Typescript**: Strongly-typed JavaScript for improved development and debugging.


## Folder Structure
```plaintext
.
├── src
│   ├── fixtures        # Contains Playwright fixtures for test setup.
│   ├── pageobjects     # Contains page object classes for the application.
├── utils               # Utility functions and helpers.
├── testdata            # JSON files containing test data.
├── tests               # Test scripts utilizing the page objects and fixtures.
│   ├── ally.spec.ts            # Contains tests related to accessibility.
│   ├── e2e-fixtures.spec.ts     # Contains end-to-end tests using fixtures.
│   └── e2e-pages.spec.ts        # Contains end-to-end tests using page managers.
├── .env                # Environment variables configuration.
└── playwright.config.ts # Configuration file for Playwright.

```
## Setup and Installation

1. **Install dependencies**:
 ```bash
npm install
```
2. **Tests**:
```bash
* ally.spec.js            - Contains tests related to accessbility
* e2e-fixtures.spec.js    - Contains end to end tests using fixtures
* e2e-pages.spec          - Contains end to end tests using page managers
```

3. **Configuration**:
 ```bash
Test Data: The test data is stored in the testData.json file.
```
4. **Running Tests**:
 ```bash
* Headless mode -
**npx playwright test**

* Head mode - 
**npx playwright test --headed**

* To run specific browser
**npx playwright test --project=chrome** 

* To run specific spec file
**npx playwright test example.spec.ts**  

* To run specific test
**npx playwright test -g 'has title'**

* To run in UI mode
  **npx playwright test --ui**

* To Run in trace on
  **npx playwright test --project=chromium --trace on**

* To Run in debug mode
  **npx playwright test --project=chromium --debug**

* To open last HTML report run:
**npx playwright show-report**
```


