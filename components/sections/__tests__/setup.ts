import React from 'react'

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: function(target, prop) {
      return function({ children, ...props }: any) {
        const Component = prop as keyof JSX.IntrinsicElements
        return React.createElement(Component, { ...props }, children)
      }
    }
  }),
  AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => React.createElement('img', props),
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: any) => React.createElement('a', props),
}))

// Mock intersection observer
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = mockIntersectionObserver

// Export something to avoid Jest warning
export const setup = true 