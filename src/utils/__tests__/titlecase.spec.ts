import { titleCase } from '../titlecase';

describe('titleCase', () => {
  it('should capitalize the first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World');
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
    expect(titleCase('jumps over the lazy dog')).toBe(
      'Jumps Over The Lazy Dog',
    );
  });

  it('should handle leading and trailing dashes or underscores', () => {
    expect(titleCase('-hello-world-')).toBe('Hello World');
    expect(titleCase('_the_quick_brown_fox_')).toBe('The Quick Brown Fox');
  });

  it('should handle consecutive dashes or underscores', () => {
    expect(titleCase('hello--world')).toBe('Hello World');
    expect(titleCase('the__quick___brown____fox')).toBe('The Quick Brown Fox');
  });

  it('should handle empty string', () => {
    expect(titleCase('')).toBe('');
  });

  it('should handle single character string', () => {
    expect(titleCase('a')).toBe('A');
  });

  it('should handle string with only dashes or underscores', () => {
    expect(titleCase('-----')).toBe('');
    expect(titleCase('_____')).toBe('');
  });
});
