const Rectangle = require('./Rectangle');

test('Calculate area of rectangle', () => {
  const rectangle = new Rectangle(5, 10);
  expect(rectangle.calculateArea()).toBe(50);
});

test('Calculate perimeter of rectangle', () => {
  const rectangle = new Rectangle(5, 10);
  expect(rectangle.calculatePerimeter()).toBe(30);
});