import ceil from "../utils/ceil.js";

describe("ceil.js Unit Tests", () => {
  // TC-1: Rounds up to the nearest integer
  it("should round up to the nearest integer", () => {
    // Arrange
    const number = 4.006;

    // Act
    const result = ceil(number);

    // Verify
    expect(result).toBe(5);
  });

  // TC-2: Rounds up to the specified precision
  it("should round up to the specified precision", () => {
    // Arrange
    const number = 6.004;
    const precision = 2;

    // Act
    const result = ceil(number, precision);

    // Verify
    expect(result).toBe(6.01);
  });

  // TC-3: Rounds up with negative precision
  it("should round up with negative precision", () => {
    // Arrange
    const number = 6040;
    const precision = -2;

    // Act
    const result = ceil(number, precision);

    // Verify
    expect(result).toBe(6100);
  });

  // TC-4: Handles zero precision
  it("should handle zero precision", () => {
    // Arrange
    const number = 7.004;
    const precision = 0;

    // Act
    const result = ceil(number, precision);

    // Verify
    expect(result).toBe(8);
  });

  // TC-5: Handles large numbers
  it("should handle large numbers", () => {
    // Arrange
    const number = 123456.789;
    const precision = 2;

    // Act
    const result = ceil(number, precision);

    // Verify
    expect(result).toBe(123456.79);
  });

  // TC-6: Handles small numbers
  it("should handle small numbers", () => {
    // Arrange
    const number = 0.0004;
    const precision = 4;

    // Act
    const result = ceil(number, precision);

    // Verify
    expect(result).toBe(0.0004);
  });

  // TC-7: Handles negative numbers
  it("should handle negative numbers", () => {
    // Arrange
    const number = -4.006;

    // Act
    const result = ceil(number);

    // Verify
    expect(result).toBe(-4);
  });
});