import { describe, expect, it } from "vitest";
import { dictionaries } from ".";

function keyShape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(keyShape);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, child]) => [key, keyShape(child)]));
  }
  return typeof value;
}

describe("locale dictionaries", () => {
  it("have the same nested keys and value types", () => {
    expect(keyShape(dictionaries.es)).toEqual(keyShape(dictionaries.en));
  });
});
