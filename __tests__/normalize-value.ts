import normalize from '../normalize-value';

describe('normalize', () => {
  test('return null', () => {
    expect(normalize(null)).toBeNull();
    expect(normalize(undefined)).toBeNull();
    expect(normalize('')).toBeNull();
    expect(normalize('    ')).toBeNull();
  });

  test('return the same', () => {
    expect(normalize(999.9)).toEqual(999.9);
    expect(normalize(999)).toEqual(999);
    expect(normalize(0)).toEqual(0);
    expect(normalize(true)).toEqual(true);
    expect(normalize(false)).toEqual(false);
    expect(normalize({})).toEqual({});
    expect(normalize([])).toEqual([]);
  });

  test('return trimmed string', () => {
    expect(normalize('    test')).toBe('test');
    expect(normalize('test    ')).toBe('test');
    expect(normalize('  test  ')).toBe('test');
  });
});
