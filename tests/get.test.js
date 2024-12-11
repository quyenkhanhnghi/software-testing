import get from "../utils/get";

describe("get.js Unit Tests", () => {
  // TC-1: Retrieves value at string path
  it("TC-1: should retrieve the value at the specified string path", () => {
    const object = { a: { b: { c: 3 } } };
    const result = get(object, "a.b.c");
    expect(result).toBe(3);
  });

  // TC-2: Retrieves value at array path
  it("TC-2: should retrieve the value at the specified array path", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, ["a", "0", "b", "c"]);
    expect(result).toBe(3);
  });

  // TC-3: Returns default value for missing path
  it("TC-3: should return the default value for a missing path", () => {
    const object = { a: { b: { c: 3 } } };
    const result = get(object, "a.b.d", "default");
    expect(result).toBe("default");
  });

  // TC-4: Handles null object
  it("TC-4: should return the default value when the object is null", () => {
    const result = get(null, "a.b.c", "default");
    expect(result).toBe("default");
  });

  // TC-5: Handles undefined object
  it("TC-5: should return the default value when the object is undefined", () => {
    const result = get(undefined, "a.b.c", "default");
    expect(result).toBe("default");
  });

  // TC-6: Handles nonexistent path without default value
  it("TC-6: should return undefined for a nonexistent path when no default value is provided", () => {
    const object = { a: { b: { c: 3 } } };
    const result = get(object, "a.b.d");
    expect(result).toBeUndefined();
  });

  // TC-7: Handles invalid path type
  it("TC-7: should return undefined for an invalid path type", () => {
    const object = { a: { b: { c: 3 } } };
    const result = get(object, 123);
    expect(result).toBeUndefined();
  });
});
