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
