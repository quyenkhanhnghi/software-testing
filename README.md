# COMP.SE.200 2024-2025 - Software Testing Project

This repository contains the project for the course **COMP.SE.200 Software Testing**. The project involves designing, implementing, and running tests for an E-commerce store web application. It includes unit tests for 10 utility functions in [library](https://github.com/otula/COMP.SE.200-2024-2025-1). The 10 tested functions include filter.js, map.js, words.js, add.js, get.js, reduce.js, toNumber.js, isEmpty. js, ceil.js, eq.js.

---

## **Instruction to Run the Tests Locally**

### **Prerequisites**
Have **Node.js** installed. We recommend the version from v.18.x or later

### **Run the tests**
1. Clone this repository to your local machine:
```bash
git clone git@github.com:quyenkhanhnghi/software-testing.git
```
2. Navigate to the project directory:
```bash
 cd software-testing
```
3. Install the required dependencies:
```bash
 npm install
```
4. Run Tests
To execute all test suites:
```bash
npm run test
```
5. Run Code Coverage Report
To generate a detailed code coverage report with Jest.
```bash
npm run test:coverage
```
  The coverage report will be displayed in the terminal and saved in the coverage 
  directory. You can view the HTML report by opening the file:
```bash
open ./coverage/lcov-report/index.html
```
## **Code Coverage Dashboard**
The code coverage dashboard for this repository is available on Coveralls.io:
[View Coverage Dashboard](https://coveralls.io/github/quyenkhanhnghi)


