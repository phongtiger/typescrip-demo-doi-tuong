var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var customer = {
    name: 'Bob',
    age: 50
};
console.log(customer.name);
console.log(customer.age);
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.toString = function () {
        return "(x: " + this.x + ", y: " + this.y + ")";
    };
    return Shape;
}());
var a = new Shape(3, 5);
console.log(a.toString());
console.log(a.x);
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rect.prototype.area = function () {
        return this.width * this.height;
    };
    return Rect;
}(Shape));
var rect = new Rect(5, 5, 10, 20);
console.log(rect.toString());
console.log(rect.area());
