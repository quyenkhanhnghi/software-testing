import filter from "../utils/filter.js";

describe("filter.js Unit Tests", () => {
  // TC-1: Filters elements with a valid predicate
  it("should filter elements based on the predicate", () => {
    // Arrange
    const array = [1, 2, 3, 4];
    const predicate = (n) => n % 2 === 0;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([2, 4]);
  });

  // TC-2: Handles empty array
  it("should return an empty array when the input array is empty", () => {
    // Arrange
    const array = [];
    const predicate = (n) => n % 2 === 0;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([]);
  });

  // TC-3: Handles null input
  it("should return an empty array when the input is null", () => {
    // Arrange
    const array = null;
    const predicate = (n) => n > 2;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([]);
  });

  // TC-4: Handles undefined predicate
  it("should throw an error when the predicate is undefined", () => {
    // Arrange
    const array = [1, 2, 3];

    // Act & Verify
    expect(() => filter(array)).toThrow(TypeError);
  });

  // TC-5: Predicate falsy for all
  it("should return an empty array when no element satisfies the predicate", () => {
    // Arrange
    const array = [1, 2, 3];
    const predicate = (n) => n > 5;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result).toEqual([]);
  });

  // TC-6: Original array immutability
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

  // TC-7: Handles large arrays
  it("should handle large arrays efficiently", () => {
    // Arrange
    const array = Array.from({ length: 1000000 }, (_, i) => i + 1);
    const predicate = (n) => n % 2 === 0;

    // Act
    const result = filter(array, predicate);

    // Verify
    expect(result.length).toBe(500000);
    expect(result[0]).toBe(2);
    expect(result[result.length - 1]).toBe(1000000);
  });
});
