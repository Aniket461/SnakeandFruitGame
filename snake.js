function Snake(){
    this.x = 0;
    this.y = 0;

    this.draw = function(){
    ctx.fillStyle ="#fff";
    ctx.fillRect(this.x, this.y, scale,scale);
    }
}