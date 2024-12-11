import isEmpty from "../utils/isEmpty.js";

describe("isEmpty.js Unit Tests", () => {
  // TC-1: Handles null value
  it("should return true for null", () => {
    // Arrange
    const value = null;

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-2: Handles undefined value
  it("should return true for undefined", () => {
    // Arrange
    const value = undefined;

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-3: Handles empty array
  it("should return true for an empty array", () => {
    // Arrange
    const value = [];

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-4: Handles non-empty array
  it("should return false for a non-empty array", () => {
    // Arrange
    const value = [1, 2, 3];

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(false);
  });

  // TC-5: Handles empty string
  it("should return true for an empty string", () => {
    // Arrange
    const value = "";

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-6: Handles non-empty string
  it("should return false for a non-empty string", () => {
    // Arrange
    const value = "abc";

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(false);
  });

  // TC-7: Handles empty object
  it("should return true for an empty object", () => {
    // Arrange
    const value = {};

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-8: Handles non-empty object
  it("should return false for a non-empty object", () => {
    // Arrange
    const value = { a: 1 };

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(false);
  });

  // TC-9: Handles empty Map
  it("should return true for an empty Map", () => {
    // Arrange
    const value = new Map();

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-10: Handles non-empty Map
  it("should return false for a non-empty Map", () => {
    // Arrange
    const value = new Map([["key", "value"]]);

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(false);
  });

  // TC-11: Handles empty Set
  it("should return true for an empty Set", () => {
    // Arrange
    const value = new Set();

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-12: Handles non-empty Set
  it("should return false for a non-empty Set", () => {
    // Arrange
    const value = new Set([1, 2, 3]);

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(false);
  });

  // TC-13: Handles prototype object
  it("should return true for a prototype object", () => {
    // Arrange
    function Proto() {}
    Proto.prototype.a = 1;
    const value = Object.create(Proto.prototype);

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });

  // TC-14: Handles buffer with data
  it("should return false for a buffer with data", () => {
    // Arrange
    const value = Buffer.from("data");

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(false);
  });

  // TC-15: Handles arguments object
  it("should return true for an empty arguments object", () => {
    // Arrange
    const value = (function() { return arguments; })();

    // Act
    const result = isEmpty(value);

    // Verify
    expect(result).toBe(true);
  });
});
