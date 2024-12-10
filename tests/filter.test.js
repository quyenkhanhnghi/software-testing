const filter = require("../utils/filter");

describe("filter", () => {
  // Test case 1: Filter with valid predicate
  it("should filter elements based on the predicate", () => {
    // Arrange
    const array = [1, 2, 3, 4];
    const predicate = (n) => n % 2 === 0;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([2, 4]);
  });

  // Test case 2: Empty array
  it("should return an empty array when input array is empty", () => {
    // Arrange
    const array = [];
    const predicate = (n) => n % 2 === 0;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([]);
  });

  // Test case 3: Null array
  it("should return an empty array when input is null", () => {
    // Arrange
    const array = null;
    const predicate = (n) => n % 2 === 0;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([]);
  });

  // Test case 4: Undefined predicate
  it("should throw an error when predicate is undefined", () => {
    // Arrange
    const array = [1, 2, 3, 4];

    // Act & Verify
    expect(() => filter(array)).toThrow(TypeError);
  });

  // Test case 5: Predicate returning falsy for all
  it("should return an empty array when no element satisfies the predicate", () => {
    // Arrange
    const array = [1, 2, 3];
    const predicate = (n) => n > 5;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([]);
  });

  // Test case 6: Original array immutability
  it("should not modify the original array", () => {
    // Arrange
    const array = [1, 2, 3];
    const predicate = (n) => n > 2;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(array).toEqual([1, 2, 3]);
    expect(result).toEqual([3]);
  });
});
