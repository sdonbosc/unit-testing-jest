const { expect } = require('@jest/globals')
const sum = require('./sum')

test('Adding Two Numbers', () => {
expect(sum(1, 2)).toBe(3)
})