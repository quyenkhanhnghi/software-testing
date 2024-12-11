import reduce from "../utils/reduce.js";

describe("reduce.js Unit Tests", () => {
  // TC-1: Reduces an array to a single value
  it("should reduce an array to a single value using the iteratee", () => {
    // Arrange
    const array = [1, 2, 3, 4];
    const iteratee = (sum, n) => sum + n;

    // Act
    const result = reduce(array, iteratee, 0);

    // Verify
    expect(result).toBe(10);
  });

  // TC-2: Reduces an object to a new value
  it("should reduce an object to a new value using the iteratee", () => {
    // Arrange
    const object = { a: 1, b: 2, c: 1 };
    const iteratee = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };

    // Act
    const result = reduce(object, iteratee, {});

    // Verify
    expect(result).toEqual({ 1: ["a", "c"], 2: ["b"] });
  });

  // TC-3: Uses the first element as the initial value if no accumulator is provided
  it("should use the first element as the initial value when accumulator is not provided", () => {
    // Arrange
    const array = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;

    // Act
    const result = reduce(array, iteratee);

    // Verify
    expect(result).toBe(6);
  });

  // TC-4: Handles empty arrays
  it("should return the initial value when reducing an empty array", () => {
    // Arrange
    const array = [];
    const iteratee = (sum, n) => sum + n;

    // Act
    const result = reduce(array, iteratee, 0);

    // Verify
    expect(result).toBe(0);
  });

  // TC-5: Handles empty objects
  it("should return the initial value when reducing an empty object", () => {
    // Arrange
    const object = {};
    const iteratee = (sum, value) => sum + value;

    // Act
    const result = reduce(object, iteratee, 0);

    // Verify
    expect(result).toBe(0);
  });

  // TC-6: Throws an error when the iteratee is not a function
  it("should throw an error when the iteratee is not a function", () => {
    // Arrange
    const array = [1, 2, 3];

    // Act & Verify
    expect(() => reduce(array, null, 0)).toThrow(TypeError);
  });

  // TC-7: Does not modify the original collection
  it("should not modify the original array", () => {
    // Arrange
    const array = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;

    // Act
    const result = reduce(array, iteratee, 0);

    // Verify
    expect(array).toEqual([1, 2, 3]);
    expect(result).toBe(6);
  });

  // TC-8: Handles nested objects
  it("should correctly reduce nested objects", () => {
    // Arrange
    const object = { a: { x: 1 }, b: { x: 2 } };
    const iteratee = (result, value) => {
      result.push(value.x);
      return result;
    };

    // Act
    const result = reduce(object, iteratee, []);

    // Verify
    expect(result).toEqual([1, 2]);
  });

  // TC-9: Handles large collections
  it("should handle large arrays efficiently", () => {
    // Arrange
    const array = Array.from({ length: 100000 }, (_, i) => i + 1);
    const iteratee = (sum, n) => sum + n;

    // Act
    const result = reduce(array, iteratee, 0);

    // Verify
    expect(result).toBe((100000 * (100000 + 1)) / 2); // Sum of first N natural numbers
  });
});
