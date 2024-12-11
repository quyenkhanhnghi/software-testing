import toNumber from "../utils/toNumber.js";

describe("toNumber.js Unit Tests", () => {
  // TC-1: Converts a valid number input
  it("should return the same number when the input is already a number", () => {
    // Arrange
    const value = 42;

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBe(42);
  });

  // TC-2: Converts a valid string representation of a number
  it("should convert a string representation of a number to a number", () => {
    // Arrange
    const value = "3.14";

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBe(3.14);
  });

  // TC-3: Handles binary string values
  it("should convert a binary string to a number", () => {
    // Arrange
    const value = "0b1010";

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBe(10);
  });

  // TC-4: Handles octal string values
  it("should convert an octal string to a number", () => {
    // Arrange
    const value = "0o12";

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBe(10);
  });

  // TC-5: Handles hexadecimal string values
  it("should return NaN for bad hexadecimal strings", () => {
    // Arrange
    const value = "-0x1A";

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBeNaN();
  });

  // TC-6: Handles objects with valueOf method
  it("should convert an object with a valueOf method to a number", () => {
    // Arrange
    const value = {
      valueOf() {
        return 42;
      },
    };

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBe(42);
  });

  // TC-7: Handles symbol values
  it("should return NaN when the input is a symbol", () => {
    // Arrange
    const value = Symbol("test");

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBeNaN();
  });

  // TC-8: Handles null and undefined
  it("should return NaN when the input is null or undefined", () => {
    // Act & Verify
    expect(toNumber(null)).toBeNaN();
    expect(toNumber(undefined)).toBeNaN();
  });

  // TC-9: Handles leading and trailing whitespace in strings
  it("should handle strings with leading and trailing whitespace", () => {
    // Arrange
    const value = "   42   ";

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBe(42);
  });

  // TC-10: Returns NaN for non-numeric strings
  it("should return NaN for strings that are not valid numbers", () => {
    // Arrange
    const value = "hello";

    // Act
    const result = toNumber(value);

    // Verify
    expect(result).toBeNaN();
  });

  // TC-11: Handles Infinity and -Infinity
  it("should handle Infinity and -Infinity correctly", () => {
    // Act & Verify
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(-Infinity)).toBe(-Infinity);
  });

  // TC-12: Ensures immutability
  it("should not modify the original input value", () => {
    // Arrange
    const value = " 100 ";

    // Act
    const result = toNumber(value);

    // Verify
    expect(value).toBe(" 100 ");
    expect(result).toBe(100);
  });
});
