// function log (message){
//     console.log(message)
// }
// let messageD = 'Hello word'
// log(messageD)
//Types
// let a: number;
// let b: string;
// let c: boolean;
// let d: any;
// let e : number[];
// let f: any[];
// enum Color{
//     Red=0,
//     Greeen=1,
//     Blue=2
// }
// let data = Color.Greeen
// console.log('data-->',data)
//Type assertions
// let message;
// message='abc';
// let endwithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')
//Inline annotations
// let drawPoint = (point:{x:number,y:number}) => {
//     // Login here
// }
// drawPoint({
//     x:1,
//     y:1
// })
//Interface
// interface Point {
//     x:number,
//     y:number
// }
// let drawPoint = (point:Point) => {
//     // Login here
// }
// drawPoint({
//     x:1,
//     y:1
// })
//INTERFACE DOES NOT CONTAIN DEFINITION OR LOGIC OF FUNCTION WHICH IS WHY WE CAN NOT GROUP
//SIMILAR functions and properties into one block. Therefore, we need to use classes and implement
//concept of cohesion or grouping elements which are highly related into one block.
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.calculateDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 3;
point.draw();
