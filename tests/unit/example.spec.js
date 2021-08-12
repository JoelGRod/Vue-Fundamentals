

// Test suite
describe("Example Component", () => {

  test("Must be greater than 10", () => {
    
    // Arrange
    let value = 10;

    // Act
    value = value + 2;

    // Assert
    expect(value).toBeGreaterThan(10);

    // Not this way... ------
    // if(value > 10) {
    //   // All ok
    // } else {
    //   throw new Error(`${value} is not greater than 10`)
    // }

  })

})
