//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//Circle - Class
//Convert the UML diagram to Typescript class. - use number for double
//Given:-
//-radius:double = 1.0
//-color:String = "red"

//+Circle()
//code:
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getInformation() {
        return `The radius of the circle is '${this.radius}' which is '${this.color}' in color`;
    }
}
var circle = new Circle(5.0, "red");
console.log(circle.getInformation());

//Output:
//The radius of the circle is '5' which is 'red' in color
//--------------------------------------------------------------------------------------------------------------------------

//+getArea():double
//code:
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getInformation() {
          return `The radius of the circle is '${this.radius}' which is '${this.color}' in color`;
      }
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  var circle = new Circle(21.0, "Black");
  var area = circle.getArea();
    console.log(circle.getInformation());
    console.log("Area:", area.toFixed(2));

//Output:
//The radius of the circle is '21' which is 'Black' in color
//Area: 1385.44
//--------------------------------------------------------------------------------------------------------------
//+getCircumference():double
//code:
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getInformation() {
          return `The radius of the circle is '${this.radius}' which is '${this.color}' in color`;
      }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  var circle = new Circle(14.0, "Blue");
  var circumference = circle.getCircumference();
  console.log(circle.getInformation());
  console.log("Circumference:", circumference);

//Output:
//The radius of the circle is '14' which is 'Blue' in color
//Circumference: 87.96459430051421
//---------------------------------------------------------------------------------------------------
//getRadius():double
//code: 
class Circle {
    constructor(diameter) {
      this.diameter = diameter;
    }
    getRadius() {
      return this.diameter / 2;
    }
  }
  var circle = new Circle(10); 
  var radius = circle.getRadius();
  console.log(`The radius of the circle is ${radius}`);

//Output:
//The radius of the circle is 5
