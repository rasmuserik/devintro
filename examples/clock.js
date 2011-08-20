function clock() {
    var now = currentTime();
    turtle.reset();
    turtle.left(); // set turtle direction upwards
    
    function drawHand(position, length) {
        turtle.rememberPosition();
        turtle.right(position);
        turtle.forward(length);
        turtle.restorePosition();
    }
    drawHand(now.getHours() / 12 * 360, .4);
    drawHand(now.getMinutes() / 60 * 360, .6);
    drawHand(now.getSeconds() / 60 * 360, .8);
    
    // draw frame
    turtle.jump(1);
    turtle.left();
    polygon(120, 2);
    setTimeout(clock, 1000);
}    
clock();
