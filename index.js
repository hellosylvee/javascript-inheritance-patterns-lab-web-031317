class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class Shape {
  constructor() {
  }
  addToPlane(x, y) {
    this.position = new Point(x, y)
  }
  move(x, y) {
    this.position = new Point(x, y)
  }
}

class Circle extends Shape {
  constructor(radius){
    super()
    this.radius = radius
  }

  diameter() {
    return (2 * this.radius)
  }

  area() {
    return ((this.radius**2) * Math.PI)
  }

  circumference() {
    return ((this.radius * 2) * Math.PI)
  }
}

class Side {
  constructor(length){
    this.length = length
  }
}

class Polygon extends Shape {
  constructor(sides){
    super()
    this.sides = sides
  }

  numberOfSides() {
    return this.sides.length
  }

  perimeter() {
    var sum = 0
    this.sides.map(function(side){
      sum += side.length
    })
    return sum
  }
}

class Quadrilateral extends Polygon {
  constructor(side1, side2, side3, side4) {
    var side_1 = new Side(side1);
    var side_2 = new Side(side2);
    var side_3 = new Side(side3);
    var side_4 = new Side(side4);
    var new_Array = [side_1, side_2, side_3, side_4]
    super(new_Array)
  }
}

class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    var side_1 = new Side(side1);
    var side_2 = new Side(side2);
    var side_3 = new Side(side3);
    var tri_side_array = [side_1, side_2, side_3]
    super(tri_side_array)
  }
}

class Rectangle extends Quadrilateral {
  constructor(width, height) {
    super(width, height, width, height)
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length)
    this.length = length;
  }

  listProperties() {
    return this.length
  }
}
