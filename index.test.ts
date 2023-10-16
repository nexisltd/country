import { describe, expect, it } from "vitest";
import { findNationality } from "./src";

describe("Nationality", () => {
    it("Checks with an example country and matches if it's right.", () => {
        expect(findNationality("United States")).toBe("American");
    });
});
