module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage", // Directory where coverage files will be stored
  coverageReporters: ["lcov", "text", "html"], // Specify coverage formats
  testMatch: ["**/tests/**/*.test.js"], // Match the correct test files (adjust path as needed)
};
