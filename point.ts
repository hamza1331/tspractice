export class Point {
    constructor(private x:number,private y:number){

    }
    draw(){
        console.log('X: '+this.x + ', Y: '+this.y)
    }
    get X(){
        return this.X
    }
    set X(value){
        if(value<0){
            console.log('Vlaue can not be less than 0')
        }
        else{
            this.X = value
        }
    }
} 