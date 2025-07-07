export class Point {

    x : number;
    y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    public valueOf() : number {
        return this.x * 1000000 + this.y;
    }    

}