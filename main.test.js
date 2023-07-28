import { fizzBuzzFunction } from "./main";

describe("Given the fizzBuzzFunction", () => {
  describe("When it is call with (1,20)", () => {
    test("Then array should be [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz,Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz]", () => {
      const expected = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
        16,
        17,
        "Fizz",
        19,
        "Buzz",
      ];
      const result = fizzBuzzFunction(1, 20);
      expect(result).toEqual(expected);
    });
  });
});
