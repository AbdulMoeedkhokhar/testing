import { describe, it, expect } from 'vitest'

function sum(a, b) {
  return a + b
}

describe('math tests', () => {
  it('adds numbers correctly', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
