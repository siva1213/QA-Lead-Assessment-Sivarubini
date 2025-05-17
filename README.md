# Playwright Automation framework (Page object model)

This framework is designed to be used as a boilerplate template to start automation testing quickly for any web application. The page object model is used to structure the test.

## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)

## Installation

Prerequisites:
NodeJS 14(or above)

- Clone the repo using the below URL
https://github.com/siva1213/QA-Lead-Assessment-Sivarubini.git
- Navigate to the folder and install npm packages using:
```bash
- npm install
```

- Install Playwright browsers
```bash
- npx @playwright/test install OR npx playwright install
```

## Usage

- Run all the spec files present in the "./tests" directory by using the below command
```bash
npx playwright test
```
- Run specific spec file
```bash
npx playwright test tests/{specfile_name.ts}
```
- It will run in Chromium,Firefox & Webkit browsers with headless mode by default
- If you need to run it in UI mode, change the headless: false in playwright.config.ts
- If you need to change the test data OR parameters, It can be changed in test-data.json file
- It is used Page Object Model design pattern
## GitHub Actions

- The workflow file is in directory .github/workflows named playwright.yml
- Every push or pull request action will trigger the workflow
- Results can be seen on the 'Actions' tab in the repo. 

