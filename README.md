# Playwright Automation Framework Using TypeScript

## Overview
This automation framework is designed to test a sample e-commerce platform built on Magento using Playwright. It follows the Page Object Model (POM) design pattern and utilizes Playwright fixtures to ensure code maintainability and reusability. The framework was developed and tests were executed using the application hosted at https://magento.softwaretestingboard.com/, which is built on a Magento backend. Additionally, the framework includes sample tests showcasing Playwright's accessibility testing features.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Playwright**: Automation library for browser testing.
- **DotEnv**: For managing environment
- **Typescript**: Provides static typing for improved code quality and easier debugging


## Folder Structure
```plaintext
.
├── src
│   ├── fixtures        # Contains Playwright fixtures for test setup.
│   ├── pageobjects     # Contains page object classes for the application.
├── utils               # Utility functions and helpers.
├── testdata            # JSON files containing test data.
├── tests               # Test scripts utilizing the page objects and fixtures.
│   ├── ally.spec.ts             # Contains tests related to accessibility.
│   ├── e2e-fixtures.spec.ts     # Contains end-to-end tests using fixtures.
│   └── e2e-pages.spec.ts        # Contains end-to-end tests using page objects.
├── .env                         # Environment variables configuration.
└── tsconfig.json                # TypeScript configuration file.
└── playwright.config.ts         # Configuration file for Playwright.

```
## Setup and Installation

1. **Install dependencies**:
 ```bash
npm install
```
2. **Tests**:
```bash
* ally.spec.ts            - Contains tests related to accessbility
* e2e-fixtures.spec.ts    - Contains end to end tests using fixtures
* e2e-pages.spec.ts       - Contains end to end tests using page objects
```

3. **Framework Explanation**:

*Page Object Model (POM):*
The framework uses the Page Object Model design pattern, where each page of the application is represented as a separate class. This encapsulates all actions related to that page, enhancing code maintainability and readability.

Playwright Fixtures:
Custom fixtures are utilized for setting up preconditions (e.g., logging in) and cleaning up after tests. This ensures consistent setup and teardown across multiple test cases.

Test Data Handling:
Test data is stored in JSON files under the testdata directory, allowing for easy modification and reuse across different test cases, supporting data-driven testing.

Utilities and Helpers:
The utils folder contains helper functions for tasks like generating random test data and managing environment configurations, promoting code reusability.

Tests:
The tests folder includes various test scripts, such as:

accessibility.spec.ts: Accessibility tests for compliance with web standards.
e2e-fixtures.spec.ts: End-to-end tests using fixtures.
e2e-pages.spec.ts: End-to-end tests utilizing the Page Object Model for user flows.
Environment Configuration:
The .env file manages different environment configurations, allowing easy switching without altering the core test logic.

Playwright Configuration:
The playwright.config.ts file sets up Playwright settings such as browser types and timeouts, enabling flexible test execution across different environments.

TypeScript Configuration:
The tsconfig.json file defines the TypeScript compiler options, ensuring the code is type-checked and compiled correctly for better development and debugging.

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


