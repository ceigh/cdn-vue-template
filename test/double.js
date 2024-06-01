import { test } from "uvu";
import { is } from "uvu/assert";
import { double } from "../js/utils/double.js";

test("double", () => {
  is(double(-2), -4);
  is(double(-1), -2);
  is(double(0), 0);
  is(double(1), 2);
  is(double(2), 4);
  is(double(Infinity), Infinity);
});

test.run();
