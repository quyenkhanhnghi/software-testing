import eq from "../utils/eq.js";

describe("eq.js Unit Tests", () => {
  // TC-1: Compares two identical objects
  it("should return true for two identical objects", () => {
    // Arrange
    const object = { 'a': 1 };

    // Act
    const result = eq(object, object);

    // Verify
    expect(result).toBe(true);
  });

  // TC-2: Compares two different objects with same properties
  it("should return false for two different objects with the same properties", () => {
    // Arrange
    const object1 = { 'a': 1 };
    const object2 = { 'a': 1 };

    // Act
    const result = eq(object1, object2);

    // Verify
    expect(result).toBe(false);
  });

  // TC-3: Compares two identical strings
  it("should return true for two identical strings", () => {
    // Arrange
    const string1 = 'a';
    const string2 = 'a';

    // Act
    const result = eq(string1, string2);

    // Verify
    expect(result).toBe(true);
  });

  // TC-4: Compares a string and an object-wrapped string
  it("should return false for a string and an object-wrapped string", () => {
    // Arrange
    const string = 'a';
    const objectString = Object('a');

    // Act
    const result = eq(string, objectString);

    // Verify
    expect(result).toBe(false);
  });

  // TC-5: Compares two NaN values
  it("should return true for two NaN values", () => {
    // Arrange
    const value1 = NaN;
    const value2 = NaN;

    // Act
    const result = eq(value1, value2);

    // Verify
    expect(result).toBe(true);
  });

  // TC-6: Compares two different numbers
  it("should return false for two different numbers", () => {
    // Arrange
    const number1 = 1;
    const number2 = 2;

    // Act
    const result = eq(number1, number2);

    // Verify
    expect(result).toBe(false);
  });

  // TC-7: Compares two identical numbers
  it("should return true for two identical numbers", () => {
    // Arrange
    const number1 = 1;
    const number2 = 1;

    // Act
    const result = eq(number1, number2);

    // Verify
    expect(result).toBe(true);
  });
});