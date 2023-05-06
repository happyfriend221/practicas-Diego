let inputDirection = {x: 0, y: 0};
let speed = 10; 
let lastPaintTime = 0;
let snakeArray = [{x: 5, y: 15}];
let food = {x: 14, y: 7};
let score = 0;

function main(currentTime){
    window.requestAnimationFrame(main);
    console.log(currentTime)
    if((currentTime - lastPaintTime) / 1000 < 1 / speed){
        return;
    }
    lastPaintTime = currentTime
     gameEngine();  
}
function isCollide(snake){
    //return false; 
    
    //if you bump into yourself
    for(let i = 1; i < snakeArray.length; i++){
       if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
        return true;
        }
    }
    //if you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0){
        return true;
    }
}

function gameEngine(){
    //update the snake array and food 
    if (isCollide(snakeArray)){
        inputDirection = {x: 0, y: 0};
        alert("Game Over. Press any key to play again! ");
        snakeArray = [{x: 13, y: 15}];
        score = 0;
        
    }
    //if you have eaten the food, increment the score and regenerator the food 
    if(snakeArray[0].y === food.y && snakeArray[0].x === food.x)
    {
        snakeArray.unshift({x: snakeArray[0].x + inputDirection.x, y: snakeArray[0].y + inputDirection.y})
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())};
        score += 1;
        scorebox.innerHTML = "score: " + score; 
    }
    
    //moving the snake 
    for(let i = snakeArray.length - 2; i >= 0; i--){
        snakeArray[i + 1] = {...snakeArray[i]}
    }
    
    snakeArray[0].x += inputDirection.x;
    snakeArray[0].y += inputDirection.y;
    
    //display the snake
    background.innerHTML = "";
    snakeArray.forEach((e, index) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        background.appendChild(snakeElement);
        if(index === 0){
            snakeElement.classList.add("head");
        }else{
            snakeElement.classList.add("snake");
        }
    });
    
   //display the food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    background.appendChild(foodElement)
}

window.requestAnimationFrame(main);

//control the game 
window.addEventListener("keydown", (e) => {
    inputDirection = {x: 0, y: 1}//start the game 
    switch(e.key){
        case "ArrowUp":
            //console.log("ArrowUp");
            inputDirection.x = 0;
            inputDirection.y = -1;
            
            
            break;
        case "ArrowDown":
            //console.log("ArrowDown");
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        case "ArrowLeft":
            //console.log("ArrowLeft");
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;
        case "ArrowRight":
            //console.log("ArrowRight");
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
        default:
            
            break;
    }
})