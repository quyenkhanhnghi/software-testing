import map from "../utils/map.js";

describe("map.js Unit Tests", () => {
  // TC-1: Applies iterate to each element
  it("should apply the iteratee to each element in the array", () => {
    const array = [1, 2, 3];
    const iterate = (n) => n * 2;
    const result = map(array, iterate);
    expect(result).toEqual([2, 4, 6]);
  });

  // TC-2: Handles empty array
  it("should return an empty array when the input array is empty", () => {
    const array = [];
    const iterate = (n) => n * 2;
    const result = map(array, iterate);
    expect(result).toEqual([]);
  });

  // TC-3: Handles null input
  it("should return an empty array when the input is null", () => {
    const array = null;
    const iterate = (n) => n * 2;
    const result = map(array, iterate);
    expect(result).toEqual([]);
  });

  // TC-4: Handles undefined iterate
  it("should throw an error when the iterate is undefined", () => {
    const array = [1, 2, 3];
    expect(() => map(array)).toThrow(TypeError);
  });

  // TC-5: iterate uses index
  it("should apply the iterate to include the index in calculations", () => {
    const array = [1, 2, 3];
    const iterate = (n, i) => n * i;
    const result = map(array, iterate);
    expect(result).toEqual([0, 2, 6]);
  });

  // TC-6: Original array immutability
  it("should not modify the original array", () => {
    const array = [1, 2, 3];
    const iteratee = (n) => n * 2;
    const result = map(array, iteratee);
    expect(array).toEqual([1, 2, 3]);
    expect(result).toEqual([2, 4, 6]);
  });

  // TC-7: Handles large arrays
  it("should handle large arrays efficiently", () => {
    const array = Array.from({ length: 1000000 }, (_, i) => i + 1);
    const iteratee = (n) => n + 1;
    const result = map(array, iteratee);
    expect(result.length).toBe(1000000);
    expect(result[0]).toBe(2);
    expect(result[result.length - 1]).toBe(1000001);
  });
});
