"use strict";
// function log (message){
//     console.log(message)
// }
exports.__esModule = true;
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
// class Point {
//     x:number;
//     y:number;
//     draw(){
//         console.log('X: '+this.x + ', Y: '+this.y)
//     }
//     calculateDistance(another:Point){
//     }
// } 
// let point = new Point()
// point.x = 1;
// point.y = 3
// point.draw()
//Constructor
// class Point {
//     x:number;
//     y:number;
//     constructor(x:number,y:number){
//         this.x=x
//         this.y=y
//     }
//     draw(){
//         console.log('X: '+this.x + ', Y: '+this.y)
//     }
//     calculateDistance(another:Point){
//     }
// } 
// let point = new Point(5,6)
// point.draw()
//Access modifiers in constructor to avoid reduntant code
// class Point {
//     constructor(private x:number,private y:number){
//     }
//     draw(){
//         console.log('X: '+this.x + ', Y: '+this.y)
//     }
// } 
// let point = new Point(5,6)
// point.draw()
//GEt and set values
// class Point {
//     constructor(private x:number,private y:number){
//     }
//     draw(){
//         console.log('X: '+this.x + ', Y: '+this.y)
//     }
//     get X(){
//         return this.X
//     }
//     set X(value){
//         if(value<0){
//             console.log('Vlaue can not be less than 0')
//         }
//         else{
//             this.X = value
//         }
//     }
// } 
// let point = new Point(5,6)
// point.X = 7
// point.draw()
//Modules
var point_1 = require("./point");
var point = new point_1.Point(5, 6);
point.x = 7;
point.draw();
