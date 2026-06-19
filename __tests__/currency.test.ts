import { getCurrencyFaName, getCurrencyFaFullName } from '../src';
import type { Currency } from '../src/Currency';

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
    (['USD', 'HKD', 'AUD', 'CAD'] as Currency[]).forEach(currency => {
      expect(getCurrencyFaName(currency)).toBe('dollar');
    });
  });

  it('should return null for unsupported currencies', () => {
    expect(getCurrencyFaName('CNY')).toBeNull();
    // Out-of-union value exercises the runtime fallback path.
    expect(getCurrencyFaName('INVALID' as Currency)).toBeNull();
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
    // Out-of-union value exercises the runtime fallback path.
    expect(getCurrencyFaFullName('INVALID' as Currency)).toBeNull();
  });
});