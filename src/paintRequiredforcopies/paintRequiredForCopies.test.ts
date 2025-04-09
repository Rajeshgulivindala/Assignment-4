import paintRequiredForCopies from './paintRequiredForCopies';

describe('paintRequiredForCopies', () => {
  describe('standard cases', () => {
    test('calculates for 3x2 artwork with 5000 copies', () => {
      expect(paintRequiredForCopies(3, 2, 5000)).toBe(4000);
    });
    test('calculates for 6x4 artwork with 1000 copies', () => {
        expect(paintRequiredForCopies(6, 4, 1000)).toBe(3200);
      });
});
describe('edge cases', () => {
    test('handles single copy', () => {
      expect(paintRequiredForCopies(3, 2, 1)).toBe(0.8);
    });
});
});