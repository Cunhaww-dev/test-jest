import { sum } from './sum.js';

describe('function sum', () => {
  let sumResult: Number;

  beforeAll(() => {
    sumResult = 10;
    console.log('Executado antes dos testes', sumResult);
  });

  afterAll(() => {
    sumResult = 0;
    console.log('Executado depois dos testes', sumResult);
  });

  it('should do sum of 3 + 7 must be 10', () => {
    const result = sum(3, 7);

    expect(result).toBe(sumResult);
  });

  test('sum of 2 + 2 must be 4', () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });
});
