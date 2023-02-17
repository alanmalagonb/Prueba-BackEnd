const {it, expect} = require("@jest/globals");
const hasUniqueCharacters = require("./Logica");

describe("Has unique Characters", () => {
    it("No unique characters", () => {
      expect(hasUniqueCharacters("Some String")).toBe(false);
    });
    if (
      ("All unique characters",
      () => {
        expect(hasUniqueCharacters("String")).toBe(true);
      })
    );
  });
