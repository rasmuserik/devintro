// # Functions defined in the book and used other places in the book
//
// Needed here as the scripts are executed individually 
// when making the illustrations.

function koch1() {
    turtle.forward();
    turtle.left(60);
    turtle.forward();
    turtle.right(120);
    turtle.forward();
    turtle.left(60);
    turtle.forward();
}

function koch2() {
    koch1();
    turtle.left(60);
    koch1();
    turtle.right(120);
    koch1();
    turtle.left(60);
    koch1();
}

function koch3() {
    koch2();
    turtle.left(60);
    koch2();
    turtle.right(120);
    koch2();
    turtle.left(60);
    koch2();
}

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

