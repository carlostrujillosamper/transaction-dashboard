import { describe, it, expect } from "vitest";
import { formatDollarAmount } from "./formatDollarAmount";

describe("formatDollarAmount", () => {
  it("formats undefined as $--", () => {
    const result = formatDollarAmount(undefined);
    expect(result).toEqual("$--");
  });

  it("formats zero as $0.00", () => {
    const result = formatDollarAmount(0);
    expect(result).toEqual("$0.00");
  });

  it("formats integer values as expected", () => {
    const result1 = formatDollarAmount(100);
    const result2 = formatDollarAmount(1000);
    const result3 = formatDollarAmount(1000000);
    expect(result1).toEqual("$100.00");
    expect(result2).toEqual("$1,000.00");
    expect(result3).toEqual("$1,000,000.00");
  });

  it("formats float values as expected", () => {
    const result1 = formatDollarAmount(1.23);
    const result2 = formatDollarAmount(123.45);
    const result3 = formatDollarAmount(1234567.89);
    expect(result1).toEqual("$1.23");
    expect(result2).toEqual("$123.45");
    expect(result3).toEqual("$1,234,567.89");
  });

  it("formats values with one decimal place correctly", () => {
    const result1 = formatDollarAmount(1.5);
    const result2 = formatDollarAmount(123.4);
    const result3 = formatDollarAmount(5678.9);
    expect(result1).toEqual("$1.50");
    expect(result2).toEqual("$123.40");
    expect(result3).toEqual("$5,678.90");
  });
});
