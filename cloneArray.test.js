const { TestScheduler } = require('jest')
const cloneArray = require('./cloneArray')

test('Test Clones Array', () =>{
    const array = [1, 2, 3]
    expect(cloneArray(array)).not.toBe(array)
})