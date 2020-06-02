
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');
const score = document.getElementById('score');
const lastscore = document.getElementById('scorelast');
var scc = 0;
const scale = 10;
const rows = cvs.height / scale;
const columns = cvs.width / scale;

var snake; 

class Snake{
    x = 0;
    y =0
    
Snake(){

this.x = 100
this.y =100
this.xSpeed = scale*1;
this.ySpeed = 0;

this.total = 0;
this.tail = [];
   }
    draw(){

        ctx.fillStyle ="#000";
        score.innerHTML = this.total;
        for(let i =0;i<this.tail.length;i++){
            ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);    
        }
         
        ctx.fillRect(this.x,this.y,scale,scale);

        }

        update(){
            scc = this.total;
            for(let i =0; i<this.tail.length- 1; i++){

                this.tail[i] = this.tail[i+1];

            }
            this.tail[this.total-1] = {x: this.x, y:this.y};


            this.x += this.xSpeed;
            this.y += this.ySpeed;


            if(this.x > cvs.width){
                this.x=0;
            }
            if(this.y > cvs.height){
                this.y=0;
            }
            if(this.x < 0){
                this.x=cvs.width;
            }
            if(this.y < 0){
                this.y = cvs.height;
            }

        }


        changeDirection(direction){

            switch(direction){
                case 'Up':
                    this.xSpeed = 0;
                    this.ySpeed = -scale*1;
                    break;
                case 'Down':
                    this.xSpeed = 0;
                    this.ySpeed = scale*1;
                    break;

                case 'Left':
                    this.xSpeed = -scale*1;
                    this.ySpeed = 0;
                    break;

                case 'Right':
                    this.xSpeed = scale*1;
                    this.ySpeed = 0;
                    break;
            }

        }

        eat(fruit){



            if(this.x === fruit.x && this.y === fruit.y){
                this.total = this.total+1;
                return true;
            }
            else{
                return false;
            }



        }

        touch(snake){

            for(let i =1; i<this.tail.length;i++){

                console.log(snake);
                if(snake.x == snake.tail[i].x && snake.y == snake.tail[i].y){

                        console.log(snake);
                       return true;
                    
                }
                else{
                    console.log("untouched");

                    return false;
                    
                }
            }
        }
}


class Fruit{

    Fruit(){
        
        this.x;
        this.y;
    }

    pickLocation(){

        this.x = Math.floor((Math.random() * rows -1)+1)*scale;
        
        this.y = Math.floor((Math.random() * columns -1)+1)*scale;
    }

    draw(){

        ctx.fillStyle = "#ff0000"
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}


(function setup (){



    snake = new Snake();
    snake.Snake();
    fruit = new Fruit();
    fruit.Fruit();
    fruit.pickLocation();


    window.setInterval(()=>{

        ctx.clearRect(0,0,cvs.width,cvs.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){

            fruit.pickLocation();


        };

if(snake.touch(snake)){
    
    
    snake.Snake();

}

    },250)

}());



window.addEventListener('keydown',((e)=>{


    const direction = e.key.replace('Arrow', '');

    snake.changeDirection(direction);

}));

