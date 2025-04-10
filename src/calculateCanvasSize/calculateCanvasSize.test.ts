import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize - Area Calculation", () => {
  // Basic functionality
  test("calculates area for positive integers", () => {
    expect(calculateCanvasSize("10", "20")).toBe(200);
    expect(calculateCanvasSize("3", "7")).toBe(21);
  });
  // Edge cases
  test("handles zero values correctly", () => {
    expect(calculateCanvasSize("0", "15")).toBe(0);
    expect(calculateCanvasSize("10", "0")).toBe(0);
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });
  test("calculates with negative values", () => {
    expect(calculateCanvasSize("-5", "4")).toBe(-20);
    expect(calculateCanvasSize("-3", "-2")).toBe(6);
  });
  // Decimal handling
  test("truncates decimal values", () => {
    expect(calculateCanvasSize("5.9", "2.1")).toBe(10); // 5*2=10
  });
// Invalid inputs
test("returns NaN for non-numeric strings", () => {
    expect(calculateCanvasSize("abc", "10")).toBeNaN();
    expect(calculateCanvasSize("10", "xyz")).toBeNaN();
  });
})