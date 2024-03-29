import { HotTrendCategory } from '@/apis/type';
import { Convenience, EventType } from '@/app/type';

export const CONVENIENCE = ['ALL', 'CU', '7Eleven', 'GS25', 'Emart24'] as const;

export const EventMapping: Record<Convenience, HotTrendCategory> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  '7Eleven': 'SEVEN11',
  Emart24: 'EMART24',
};

export const HotTrendMapping: Record<Convenience, HotTrendCategory> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  '7Eleven': 'SEVEN11',
  Emart24: 'EMART24',
};

export const mappingSegments: Record<HotTrendCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
};

export const EVENT_TYPE_LIST: { text: string; type: EventType }[] = [
  { text: '1+1', type: 'ONE_PLUS_ONE' },
  { text: '2+1', type: 'TWO_PLUS_ONE' },
  { text: '할인', type: 'SALE' },
  { text: '+덤', type: 'BONUS' },
];

export const EVENT_TYPE_MAP: Record<EventType, { text: string; bg: string }> = {
  ONE_PLUS_ONE: { text: '1+1', bg: 'bg-[#73F69D]' },
  TWO_PLUS_ONE: { text: '2+1', bg: 'bg-[#E2F981]' },
  SALE: { text: '할인', bg: 'bg-[#FFA8A5]' },
  BONUS: { text: '+덤', bg: 'bg-[#C29DF6]' },
} as const;
