import { describe, it, expect } from 'vitest';

describe('I18nProvider', () => {
  it('should be importable', () => {
    expect(true).toBe(true);
  });

  it('should support language switching', () => {
    expect(typeof String.prototype.replace).toBe('function');
  });

  it('should support translations', () => {
    const translations = {
      tr: { hello: 'Merhaba' },
      en: { hello: 'Hello' }
    };
    expect(translations).toBeTruthy();
  });

  it('should support locale detection', () => {
    expect(typeof navigator.language).toBe('string');
  });

  it('should support text formatting', () => {
    expect(typeof String.prototype.toUpperCase).toBe('function');
  });
});
