import paintRequiredForCopies from './paintRequiredForCopies';

describe('paintRequiredForCopies', () => {
  describe('standard cases', () => {
    test('calculates for 3x2 artwork with 5000 copies', () => {
      expect(paintRequiredForCopies(3, 2, 5000)).toBe(4000);
    });
    
});
});