import { getCurrencyFaName, getCurrencyFaFullName } from '../src';

describe('getCurrencyFaName', () => {
  it('should return correct icon name for USD', () => {
    expect(getCurrencyFaName('USD')).toBe('dollar');
  });

  it('should return correct icon name for EUR', () => {
    expect(getCurrencyFaName('EUR')).toBe('euro');
  });

  it('should return correct icon name for GBP', () => {
    expect(getCurrencyFaName('GBP')).toBe('pound');
  });

  it('should handle multiple currencies that use dollar icon', () => {
    ['USD', 'HKD', 'AUD', 'CAD'].forEach(currency => {
      expect(getCurrencyFaName(currency)).toBe('dollar');
    });
  });

  it('should return null for unsupported currencies', () => {
    expect(getCurrencyFaName('CNY')).toBeNull();
    expect(getCurrencyFaName('INVALID')).toBeNull();
  });
});

describe('getCurrencyFaFullName', () => {
  it('should return correct full icon name for USD', () => {
    expect(getCurrencyFaFullName('USD')).toBe('fa-dollar-sign');
  });

  it('should return correct full icon name for EUR', () => {
    expect(getCurrencyFaFullName('EUR')).toBe('fa-euro-sign');
  });

  it('should return correct full icon name for GBP', () => {
    expect(getCurrencyFaFullName('GBP')).toBe('fa-pound-sign');
  });

  it('should return null for unsupported currencies', () => {
    expect(getCurrencyFaFullName('CNY')).toBeNull();
    expect(getCurrencyFaFullName('INVALID')).toBeNull();
  });
});