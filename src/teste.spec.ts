import { initialTest } from './index';

describe('Test', () => {
  test('initialTest', () => {
    const result = initialTest();
    expect(1).toBe(result);
  });
});
