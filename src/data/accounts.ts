import type { Account } from '../types/account';

export const ACCOUNTS: Account[] = [
  {
    id: 'konta_dziecka',
    name: 'PKO Konto Dziecka + Pierwsze Konto Oszczędnościowe',
    description: 'Pakiet dla najmłodszych rekrutów. Pełna kontrola rodzicielska i nauka oszczędzania od pierwszych dni misji.',
    features: ['Brak opłat za prowadzenie', 'Dostęp do aplikacji PKO Junior', 'Atrakcyjne oprocentowanie oszczędności'],
    matchCriteria: { minAgeScore: 10, maxAgeScore: 10 }
  },
  {
    id: 'konto_mlodych',
    name: 'PKO Konto dla Młodych',
    description: 'Dla kadetów wdrożeniowych. Zero opłat i pełna mobilność w każdym miejscu na świecie.',
    features: ['Konto i karta bezwarunkowo za 0 zł', 'Darmowe wypłaty ze wszystkich bankomatów na świecie', 'Brak opłat za przelewy'],
    matchCriteria: { minAgeScore: 20, maxAgeScore: 20 }
  },
  {
    id: 'konto_za_zero',
    name: 'PKO Konto za Zero',
    description: 'Podstawowy sprzęt operacyjny. Łatwe do utrzymania, idealne do codziennych zadań na lokalnym terytorium.',
    features: ['Konto za 0 zł', 'Karta za 0 zł (przy 5 transakcjach/msc)', 'Dostęp do BLIKa i Apple/Google Pay'],
    matchCriteria: { minAgeScore: 30, maxAgeScore: 30, maxIncomeScore: 100, preferenceScore: 1 }
  },
  {
    id: 'konto_bez_granic',
    name: 'PKO Konto bez Granic',
    description: 'Moduł dla podróżników i tych, którzy cenią swobodę. Stały abonament za pełen komfort misji globalnych.',
    features: ['Stała opłata 17,90 zł/msc', 'Darmowe wypłaty ze wszystkich bankomatów na świecie', 'Karta wielowalutowa w cenie'],
    matchCriteria: { minAgeScore: 30, maxAgeScore: 30, maxIncomeScore: 100, preferenceScore: 2 }
  },
  {
    id: 'konto_aurum',
    name: 'Konto Aurum',
    description: 'Zarządzanie na wyższym szczeblu. Wyższy priorytet zaopatrzenia i wsparcie osobistego doradcy.',
    features: ['Konto za 0 zł (przy wpływach >9k)', 'Priorytetowa obsługa', 'Dodatkowe korzyści ubezpieczeniowe'],
    matchCriteria: { minAgeScore: 30, maxAgeScore: 30, minIncomeScore: 200, maxIncomeScore: 200 }
  },
  {
    id: 'konto_platinium',
    name: 'Konto Platinium II',
    description: 'Status VIP. Elitarny dostęp, maksymalna dyskrecja i dedykowany sztab ekspertów do Twojej dyspozycji.',
    features: ['Konto za 0 zł (przy wpływach >20k)', 'Osobisty doradca Bankowości Prywatnej', 'Prestiżowe karty kredytowe'],
    matchCriteria: { minAgeScore: 30, maxAgeScore: 30, minIncomeScore: 300 }
  },
  {
    id: 'konto_firmowe',
    name: 'PKO Konto Firmowe',
    description: 'Centrum dowodzenia dla niezależnych jednostek. Narzędzia do sprawnego prowadzenia operacji biznesowych.',
    features: ['0 zł za prowadzenie przez 2 lata', 'Dostęp do księgowości online', 'Integracja z e-Urzędem'],
    matchCriteria: { minWorkTypeScore: 1, maxWorkTypeScore: 1 }
  }
];