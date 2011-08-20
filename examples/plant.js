function plant(n) {
    if(n > 0) {
        turtle.left(random(80)-40);
        turtle.forward(n);

        turtle.rememberPosition();
        plant(random(n));
        plant(random(n));
        plant(random(n));
        turtle.restorePosition();
    }
}
turtle.left();
plant(100);
