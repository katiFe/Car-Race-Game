class Game {
    constructor(){
        this.currentTime = 0;
        this.car = null; // when constructor runs there is no car
    }
    startGame() {
       this.car = new Car(); // now car is shown n board 
       this.car.create();
       this.addEventListeners();
    }
//callng another method in the class
    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft") {
                this.car.moveLeft();    // call that method of the object this.car
                this.car.draw();
            } else if (event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw();
            }
            });
    }
}

class Car {
    constructor(){
        this.x = 50;
        this.y = 100
        this.width = 10;
        this.height = 20;
        this.domElm = document.createElement("div");
    }

    moveLeft(){
        this.x--;
    }
    moveRight(){
        this.x++;
    }

    create(){
         //create element and add css
        this.comElm.className = "car";
         // append to DOM
         const gameElm = document.getElementById("game");
         gameElm.appendChild(this.comElm);
    }

    draw(){
        //create element and add css
        
        this.comElm.style.width = this.width + "%"; // 10%
        this.comElm.style.height = this.height + "%";
        this.comElm.style.left = this.x + "%";
        this.comElm.style.top = this.y + "%";
       
    }
}