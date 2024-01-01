import { expect, test } from "vitest";
import sum from "./sum";

test("sum-on-a-b", () => {
  expect(sum(3 + 4)).toEqual(7);
});

test("sum-on-a-b-c", () => {
  expect(sum(3 + 4 + 5)).toEqual(12);
});

test("sum-on-a-b-c-...", () => {
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(45);
});
