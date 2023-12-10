import { useMimeType, useMimeExtension } from '../src';

describe('useMimeType', () => {
  it('should return the mime type', () => {
    expect(useMimeType('test.txt')).toBe('Your mime type is text/plain');
  });
});

describe('useMimeExtension', () => {
  it('should return the mime extension', () => {
    expect(useMimeExtension('text/plain')).toBe('Your mime extension is txt');
  });
});
