import mustShowError from '../must-show-error';
import {toImmediate} from '../immediate';

describe('mustShowError', () => {
  test('must show error if field has error and touched', () => {
    const meta = {
      error: 'Some error string',
      touched: true
    };

    expect(mustShowError(meta)).toBeTruthy();
  });

  test('must show error if field has immediate error and not touched', () => {
    const meta = {
      error: toImmediate('Some error string'),
      touched: false
    };

    expect(mustShowError(meta)).toBeTruthy();
  });

  test('don\'t show error if no error', () => {
    const meta = {
      touched: false
    };

    expect(mustShowError(meta)).toBeFalsy();
  });

  test('don\'t show error if error and not touched', () => {
    const meta = {
      error: 'Some error string',
      touched: false
    };

    expect(mustShowError(meta)).toBeFalsy();
  });
});
