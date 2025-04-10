const calculateSquare = require('./utils')

describe('calculateSquare', () => {
    it("should return 5 when x = 3 and y = 2", () => {
        //Given
        const x = 3
        const y = 2

        //When
        const result = calculateSquare(x, y)

        //Then
        const expectedResult = 5

        expect(result).toBe(expectedResult)
    })

    it("should return 1000 when x, y, z are all 10", () => {
        //Given
        const x = 10
        const y = 10
        const z = 10

        //When
        const result = calculateSquare(x, y, z)

        //Then
        const expectedResult = 1000

        expect(result).toBe(expectedResult)
    })
})