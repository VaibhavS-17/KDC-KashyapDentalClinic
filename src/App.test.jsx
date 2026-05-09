import { test, expect } from 'vitest'
import App from './App.jsx'

test('App component is defined', () => {
  expect(App).toBeDefined()
  expect(typeof App).toBe('function')
})
