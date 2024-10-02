# WebDriverIO Project Setup
This guide provides steps to set up WebDriverIO for automated testing in a Node.js environment.
## 1. Install WDIO
    npm init wdio@latest .

## 2. Add Script to package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "wdio": "wdio run wdio.conf.js"
    }
Note: The problem can occurs when using Node version 16 to 18. It is recommended to use Node version 20.
## 3. Run WebdriverIO test
    npm run wdio
## 4. Project Structure
```
/config: 
    - Configuration files
    - WebDriverIO configuration
    - Any data related to tests (optional, if needed)
/node_modules
    - Node.js dependencies
/report
    - Auto-generated reports after test execution (for Mocha or Allure)
/test
    /pageObjects
        - Contains POM files (one for each page of the app)
    /testcase
        - Contains test cases or scenarios   
package-lock.json
package.json
README.md
```