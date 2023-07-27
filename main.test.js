import { doFreeBuzz } from "./main";
describe("Given doFreeBuzz function", () => {
  describe("When it is call with (2,6)", () => {
    test('Then array should be  "[2, fizz, 4, buzz, fizz]"', () => {
      const numberStart = 2;
      const numberEnd = 6;
      const expected = [2, "Fizz", 4, "Buzz", "Fizz"];
      const result = doFreeBuzz(numberStart, numberEnd);
      expect(result).toEqual(expected);
    });

    describe("When it is call with (0,0)", () => {
      test('Then array should be  null"', () => {
        const numberStart = 0;
        const numberEnd = 0;
        const expected = null;
        const result = doFreeBuzz(numberStart, numberEnd);
        expect(result).toEqual(expected);
      });
    });

    describe("When it is call with (0,0)", () => {
      test('Then array should be  null"', () => {
        const numberStart = 0;
        const numberEnd = 0;
        const expected = null;
        const result = doFreeBuzz(numberStart, numberEnd);
        expect(result).toEqual(expected);
      });

      describe("When it is call with (2,-1)", () => {
        test('Then array should be  null"', () => {
          const numberStart = 2;
          const numberEnd = -1;
          const expected = null;
          const result = doFreeBuzz(numberStart, numberEnd);
          expect(result).toEqual(expected);
        });

        describe('When it is call with ("Hola","Esto no funciona")', () => {
          test('Then array should be  null"', () => {
            const numberStart = "hola";
            const numberEnd = "esto no funciona";
            const expected = null;
            const result = doFreeBuzz(numberStart, numberEnd);
            expect(result).toEqual(expected);
          });
        });
      });
    });
  });
});
