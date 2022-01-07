import {toImmediate, isImmediate, NON_PRINTABLE_MARKER} from '../immediate';

describe('toImmediate', () => {
  test('create immediate error string', () => {
    const error = toImmediate('Some error string');

    expect(error[0]).toEqual(NON_PRINTABLE_MARKER);
  });

  test('skip create immediate error string, because already immediate', () => {
    const raw = toImmediate('Some error string');
    const error = toImmediate(raw);

    expect(error[0]).toEqual(NON_PRINTABLE_MARKER);
  });
});

describe('isImmediate', () => {
  test('check is error immediate', () => {
    const raw = 'Some error string';

    expect(isImmediate(raw)).toBeFalsy();

    const error = toImmediate(raw);

    expect(isImmediate(error)).toBeTruthy();
  });
});
