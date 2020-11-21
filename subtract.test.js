const subtract = require('./subtract')
    test('properly subtracting the numbers',()=>{
        expect(
            subtract(1,2)
        ).toBe(-1)
    })
