import { writable } from 'svelte/store'

export type Notification = {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  timestamp: Date
}

// Initial notifications
const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Trade Complete',
    message: 'Your purchase of 0.5 BTC was successful.',
    type: 'success',
    read: false,
    timestamp: new Date()
  },
  {
    id: '2',
    title: 'Price Alert',
    message: 'ETH has risen by 5% in the last hour.',
    type: 'info',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
  }
]

function createNotificationStore() {
  const { subscribe, update } = writable<Notification[]>(initialNotifications)
  
  return {
    subscribe,
    add: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
      update(notifications => [
        {
          ...notification,
          id: Date.now().toString(),
          timestamp: new Date(),
        },
        ...notifications
      ])
    },
    markAsRead: (id: string) => {
      update(notifications => 
        notifications.map(notification => 
          notification.id === id
            ? { ...notification, read: true }
            : notification
        )
      )
    },
    markAllAsRead: () => {
      update(notifications => 
        notifications.map(notification => ({ ...notification, read: true }))
      )
    },
    remove: (id: string) => {
      update(notifications => 
        notifications.filter(notification => notification.id !== id)
      )
    },
    clear: () => {
      update(() => [])
    }
  }
}

export const notifications = createNotificationStore()