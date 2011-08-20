function polygon(n, diameter) {
    diameter = diameter || 1;
    var angle = 360 / n;
    var sidelength = Math.PI * diameter / n;
    while(n > 0) {
        turtle.forward(sidelength/2);
        turtle.left(angle);
        turtle.forward(sidelength/2);
        n = n - 1;
    }
}

polygon(5); turtle.jump(1.2);
polygon(8); turtle.jump(1.2);
polygon(3); turtle.jump(1.2);
polygon(100); turtle.jump(1.2);
