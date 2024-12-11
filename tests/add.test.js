import add from "../utils/add.js";

describe("add.js Unit Tests", () => {
  // TC-1: Adds two positive numbers
  it("TC-1: should add two positive numbers", () => {
    const result = add(6, 4);
    expect(result).toBe(10);
  });

  // TC-2: Adds a positive and a negative number
  it("TC-2: should add a positive and a negative number", () => {
    const result = add(6, -4);
    expect(result).toBe(2);
  });

  // TC-3: Adds two negative numbers
  it("TC-3: should add two negative numbers", () => {
    const result = add(-6, -4);
    expect(result).toBe(-10);
  });

  // TC-4: Adds zero
  it("TC-4: should return the same number when adding zero", () => {
    const result = add(6, 0);
    expect(result).toBe(6);
  });

  // TC-5: Adds floating-point numbers
  it("TC-5: should correctly add floating-point numbers", () => {
    const result = add(1.1, 2.2);
    expect(result).toBeCloseTo(3.3, 5);
  });

  // TC-6: Concatenates inputs when given invalid input types
  it("TC-6: should concatenate inputs when given invalid input types", () => {
    const result = add(6, "a");
    expect(result).toBe("6a");
  });

  // TC-7: Adds large numbers
  it("TC-7: should correctly add large numbers", () => {
    const result = add(1e15, 1e15);
    expect(result).toBe(2e15);
  });

  // TC-8: Handles null as one input
  it("TC-8: should handle null as one input", () => {
    const result = add(6, null);
    expect(result).toBeNaN();
  });

  // TC-9: Handles both inputs as null
  it("TC-9: should handle both inputs as null", () => {
    const result = add(null, null);
    expect(result).toBeNaN();
  });

  // TC-10: Handles undefined as one input
  it("TC-10: should handle undefined as one input", () => {
    const result = add(6, undefined);
    expect(result).toBeNaN();
  });

  // TC-11: Handles an empty string as input
  it("TC-11: should handle an empty string as input", () => {
    const result = add(6, "");
    expect(result).toBe("6");
  });

  // TC-12: Handles array inputs
  it("TC-12: should handle array inputs", () => {
    const result = add([1, 2], [3, 4]);
    expect(result).toBeNaN();
  });
});
