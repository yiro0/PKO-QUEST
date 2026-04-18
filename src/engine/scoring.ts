import type{ Account } from '../types/account';
import { ACCOUNTS } from '../data/accounts';

/**
 * Funkcja dopasowująca najlepsze konto na podstawie zebranych punktów.
 * @param scores Obiekt z punktami (np. { age: 20, income: 100, work_type: 4 })
 * @returns Obiekt Account, który najlepiej spełnia kryteria
 */
export const calculateResult = (scores: Record<string, number>): Account => {
  // Filtrujemy konta, sprawdzając czy punkty gracza mieszczą się w widełkach
  const matches = ACCOUNTS.filter(account => {
    const c = account.matchCriteria;
    
    // Sprawdzamy wiek (jeśli zdefiniowano w kryteriach)
    if (c.minAgeScore && (scores.age || 0) < c.minAgeScore) return false;
    if (c.maxAgeScore && (scores.age || 0) > c.maxAgeScore) return false;
    
    // Sprawdzamy typ pracy
    if (c.minWorkTypeScore && (scores.work_type || 0) < c.minWorkTypeScore) return false;
    if (c.maxWorkTypeScore && (scores.work_type || 0) > c.maxWorkTypeScore) return false;
    
    // Sprawdzamy dochody
    if (c.minIncomeScore && (scores.income || 0) < c.minIncomeScore) return false;
    if (c.maxIncomeScore && (scores.income || 0) > c.maxIncomeScore) return false;
    
    // Opcjonalnie: preferencje (np. darmowe konto vs bankomaty)
    if (c.preferenceScore && scores.preference !== c.preferenceScore) return false;

    return true;
  });

  // Jeśli nic nie pasuje (mało prawdopodobne), zwróć konto za zero jako domyślne
  return matches.length > 0 ? matches[0] : ACCOUNTS.find(a => a.id === 'konto_za_zero')!;
};