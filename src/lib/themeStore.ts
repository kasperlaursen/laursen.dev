import { writable } from 'svelte/store';

export type ThemeColor = 'red' | 'blue' | 'green' | 'purple' | 'yellow' | 'gray' | 'dark-gray';
export const themeColor = writable<ThemeColor>('gray');
export const headerSize = writable<'small' | 'large'>('large');
