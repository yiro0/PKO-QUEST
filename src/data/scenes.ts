// src/data/scenes.ts
import type { Scene } from '../types/scene';

export const SCENES: Scene[] = [
  {
    id: 1,
    type: 'cinematic',
    title: 'Wjazd do Doliny',
    description: 'Wysiadasz z dyliżansu. Wszędzie dookoła widać kowali, farmerów, poszukiwaczy przygód i kupców z odległych krain.',
    // Zewnętrzny placeholder tła (Wioska/Krajobraz)
    backgroundUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop',
    // Zewnętrzny placeholder postaci
    characterImage: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Przewodnik&backgroundColor=transparent'
  },
  {
    id: 2,
    type: 'question',
    title: 'Spotkanie z Barnabą',
    characterName: 'Barnaba',
    characterImage: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Barnaba&backgroundColor=transparent',
    characterLine: 'Ho, ho! Nowa twarz w Dolinie Złotego Dębu! Witaj, wędrowcze. Opowiedz mi o sobie, a dobiorę Dziennik idealny dla Twojej duszy. Ile zim już przeżyłeś na tym świecie?',
    description: 'Barnaba zaprasza Cię do ogniska i spogląda wyczekująco.',
    backgroundUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop',
    answers: [
      { id: 'age_1', text: 'Niedawno nauczyłem się czytać! (Poniżej 13 lat)', scoreCategory: 'age', scoreValue: 10 },
      { id: 'age_2', text: 'Gotów na własne przygody! (13 - 26 lat)', scoreCategory: 'age', scoreValue: 20 },
      { id: 'age_3', text: 'Mam na karku trochę doświadczenia (Powyżej 26 lat)', scoreCategory: 'age', scoreValue: 30 },
    ]
  },
  {
    id: 3,
    type: 'question',
    title: 'Plany na przyszłość',
    characterName: 'Barnaba',
    characterImage: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Barnaba&backgroundColor=transparent',
    characterLine: 'Z czego zamierzasz się tu utrzymywać? Każdy ma swój fach. Jakie łupy będziesz znosić do Skarbca każdego księżyca?',
    description: 'Określ swoją profesję w Dolinie:',
    backgroundUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop',
    answers: [
      { id: 'work_1', text: 'Kupiłem stary warsztat. Zakładam własny biznes! (JDG)', scoreCategory: 'work_type', scoreValue: 1 },
      { id: 'work_2', text: 'Zwykłe zlecenia z tablicy. Standardowe łupy (Do 9 000 zł)', scoreCategory: 'income', scoreValue: 100 },
      { id: 'work_3', text: 'Prowadzę elitarne misje (9 000 - 20 000 zł)', scoreCategory: 'income', scoreValue: 200 },
      { id: 'work_4', text: 'Jestem legendą. Władam skarbami (Powyżej 20 000 zł)', scoreCategory: 'income', scoreValue: 300 },
    ]
  },
  {
    id: 4,
    type: 'question',
    title: 'Styl Przemierzania Świata',
    characterName: 'Barnaba',
    characterImage: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Barnaba&backgroundColor=transparent',
    characterLine: 'Została nam ostatnia kwestia, wędrowcze. Jak wygląda Twój styl życia? Zapuszczasz korzenie, czy ciągnie Cię w nieznane?',
    description: 'Barnaba zamyka księgę i uśmiecha się pod nosem.',
    backgroundUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop',
    answers: [
      { id: 'pref_1', text: 'Zostaję w Dolinie. Będę codziennie odwiedzał karczmę (Aktywnie, lokalnie)', scoreCategory: 'preference', scoreValue: 1 },
      { id: 'pref_2', text: 'Nie usiedzę w miejscu. Będę skakać przez portale (Częste podróże)', scoreCategory: 'preference', scoreValue: 2 }
    ]
  },
  {
    id: 5,
    type: 'cinematic',
    title: 'Analiza Przeznaczenia',
    characterName: 'Barnaba',
    characterImage: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Barnaba&backgroundColor=transparent',
    description: 'Barnaba chowa swój notatnik i zaczyna szukać odpowiedniego Magicznego Dziennika w swoim ogromnym plecaku...',
    backgroundUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop'
  }
];