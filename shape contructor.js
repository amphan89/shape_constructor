function Shape(n, s) {
    this.name = n;
    this.sides = s;
}

function Rectangle(h, w, n, s) {
    this.height = h;
    this.width = w;
    Shape.call(this, n, s)
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function () {
    console.log(this.height * this.width);
    
}

Rectangle.prototype.perimeter = function () {
    console.log(this.height*2 + this.width*2)
}

function Square(h, n, s){
    Rectangle.call(this, h, h, n, s);
}

Square.prototype= Object.create(Rectangle.prototype)

var r = new Rectangle('5', '10', 'rect', '4');

r.area();
r.perimeter();




