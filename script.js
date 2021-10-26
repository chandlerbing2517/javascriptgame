var game = document.getElementById("game");
if(window.innerWidth < 400){
    var width = window.innerWidth-2;
}else{
    var width = 400;
}
document.documentElement.style.setProperty('--width', width + "px");
var character = document.getElementById("character");
var currentBlocks = [];
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var updateBlocks = setInterval(function(){
    var holeLast = document.getElementById("hole".concat(counter-1));
    var blockLast = document.getElementById("block".concat(counter-1));
    if(counter > 0){
var currentBlocks = [];

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
        character.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

var blocks = setInterval(function(){
    var blockLast = document.getElementById("block"+(counter-1));
    var holeLast = document.getElementById("hole"+(counter-1));
    if(counter>0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if(blockLastTop < 400||counter==0){
    if(blockLastTop<400||counter==0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("id", "block".concat(counter));
        hole.setAttribute("class", "hole");
        hole.setAttribute("id", "hole".concat(counter));
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("id", "hole"+counter);
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        if(window.innerWidth < 400){
            var random = Math.floor(Math.random() * (window.innerWidth - 40));
        }else{
            var random = Math.floor(Math.random() * 320);
        }
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(hole); 
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }
    var characterTop = parseFloat(window.getComputedStyle(character).getPropertyValue("top"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterTop < -20){
        let num = counter - 10;
        alert("u lose. score: " + num);
        clearInterval(updateBlocks);
        Location.reload();
    }
    var drop = 0;
    for (var i = 0; i < currentBlocks.length; i++) {
        var x = currentBlocks[i];
        let iblock = document.getElementById("block".concat(x));
        let ihole = document.getElementById("hole".concat(x));
        var blockTopI = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        var holeLeftI = parseInt(window.getComputedStyle(ihole).getPropertyValue("left"));
        var holeTopI = parseInt(window.getComputedStyle(ihole).getPropertyValue("top"));
        if(window.innerWidth < 400){
            var newtop = blockTopI - 1;
        }else{
            var newtop = blockTopI - 0.5;
        }
        iblock.style.top = newtop + "px";
        ihole.style.top = newtop + "px";
        if(blockTopI < -20){
    if(characterTop <= 0){
        alert("Game over. Score: "+(counter-9));
        clearInterval(blocks);
        location.reload();
    }
    for(var i = 0; i < currentBlocks.length;i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if(blockTopI - 20 < characterTop && blockTopI  > characterTop){
        if(iblockTop-20<characterTop && iblockTop>characterTop){
            drop++;
        }
        if(holeLeftI-5 <= characterLeft && 
           characterLeft <= holeLeftI + 25 && 
           blockTopI - 22 < characterTop &&
           blockTopI  > characterTop){
            drop = 0;
            break;
            if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                drop = 0;
            }
        }
    }
    if(drop == 0){
    if(drop==0){
        if(characterTop < 480){
            if(window.innerWidth < 400){
                character.style.top = characterTop + 5 + "px";
            }else{
                character.style.top = characterTop + 2 + "px";
            }
        }
    } else{
        if(window.innerWidth < 400){
            character.style.top = characterTop - 1  + "px";
        }else{
            character.style.top = characterTop - 0.5 + "px";
            character.style.top = characterTop + 2 + "px";
        }
    }else{
        character.style.top = characterTop - 0.5 + "px";
    }