import { writable } from 'svelte/store'

export type User = {
  id: string
  name: string
  email: string
  balance: {
    usd: number
    btc: number
    eth: number
  }
  isAuthenticated: boolean
}

// Initial user state
const initialUser: User = {
  id: '',
  name: '',
  email: '',
  balance: {
    usd: 0,
    btc: 0,
    eth: 0
  },
  isAuthenticated: false
}

// Demo user for quick login
const demoUser: User = {
  id: 'user-123',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  balance: {
    usd: 15000.50,
    btc: 0.75,
    eth: 5.25
  },
  isAuthenticated: true
}

function createUserStore() {
  const { subscribe, set, update } = writable<User>(initialUser)
  
  return {
    subscribe,
    login: (email: string, password: string) => {
      // In a real app, this would make an API call
      // For demo purposes, we'll just set the demo user
      if (email && password) {
        set(demoUser)
        return true
      }
      return false
    },
    logout: () => {
      set(initialUser)
    },
    updateBalance: (currency: keyof User['balance'], amount: number) => {
      update(user => ({
        ...user,
        balance: {
          ...user.balance,
          [currency]: amount
        }
      }))
    }
  }
}

export const user = createUserStore()