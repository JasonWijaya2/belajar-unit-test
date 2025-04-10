const add = require('./utils')

describe('menjumlahkan 1 + 2 = 3', () => {
    it("should return 5 when x = 3 and y = 2", () => {
        //Given
        const x = 3
        const y = 2

        //When
        const result = add(x, y)

        //Then
        const expectedResult = 5

        expect(result).toBe(expectedResult)
    })
})