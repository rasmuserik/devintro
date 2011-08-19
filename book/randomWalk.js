function randomWalk(n) {
    while(n > 0) {
        turtle.left(random(360));
        turtle.forward();
        n = n - 1;
    }
}
randomWalk(1000);
