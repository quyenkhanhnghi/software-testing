import words from "../utils/words";

describe("words.js Unit Tests", () => {
  // TC-1: Splits a basic ASCII string
  it("TC-1: should split a basic ASCII string into words", () => {
    const result = words("fred, barney, & pebbles");
    expect(result).toEqual(["fred", "barney", "pebbles"]);
  });

  // TC-2: Uses custom pattern to split a string
  it("TC-2: should split a string using a custom pattern", () => {
    const result = words("fred, barney, & pebbles", /[^, ]+/g);
    expect(result).toEqual(["fred", "barney", "&", "pebbles"]);
  });

  // TC-3: Handles Unicode input
  it("TC-3: should handle splitting Unicode input into words", () => {
    const result = words("你好, 世界");
    expect(result).toEqual(["你好", "世界"]);
  });

  // TC-4: Handles empty string input
  it("TC-4: should return an empty array for an empty string", () => {
    const result = words("");
    expect(result).toEqual([]);
  });

  // TC-5: Handles null input
  it("TC-5: should return an empty array for null input", () => {
    const result = words(null);
    expect(result).toEqual([]);
  });

  // TC-6: Handles non-string input
  it("TC-6: should return an empty array for non-string input", () => {
    const result = words(12345);
    expect(result).toEqual([]);
  });

  // TC-7: Handles string with numbers
  it("TC-7: should return a single element array for alphanumeric strings", () => {
    const result = words("abc123def456");
    expect(result).toEqual(["abc123def456"]);
  });

  // TC-8: Splits string using default pattern
  it("TC-8: should split a sentence into words using the default pattern", () => {
    const result = words("This is a test sentence.");
    expect(result).toEqual(["This", "is", "a", "test", "sentence"]);
  });
});
