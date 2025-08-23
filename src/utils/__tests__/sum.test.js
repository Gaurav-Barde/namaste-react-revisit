import { sum } from "../utility-functions";

test("Sum function should calculate the sum of two number", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
