import { writable } from 'svelte/store'

// Tab options
export type TabOption = 'sell' | 'buy' | 'send' | 'swap'

// Default tab
export const currentTab = writable<TabOption>('sell')

// Tab configuration
export const tabs: Array<{id: TabOption, label: string}> = [
  { id: 'sell', label: 'SELL' },
  { id: 'buy', label: 'BUY' },
  { id: 'send', label: 'SEND' },
  { id: 'swap', label: 'SWAP' }
]